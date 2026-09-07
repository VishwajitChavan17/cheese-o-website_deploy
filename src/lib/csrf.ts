import { createMiddleware, csrfSymbol } from "@tanstack/react-start";

type CsrfMiddlewareOptions = {
  filter?: (ctx: any) => boolean | Promise<boolean>;
  origin?:
    | string
    | string[]
    | ((value: string, ctx: any) => boolean | Promise<boolean>);
  secFetchSite?:
    | "same-origin"
    | "same-site"
    | "cross-site"
    | "none"
    | Array<"same-origin" | "same-site" | "cross-site" | "none">
    | ((value: "same-origin" | "same-site" | "cross-site" | "none", ctx: any) => boolean | Promise<boolean>);
  referer?:
    | boolean
    | ((referer: string, ctx: any) => boolean | Promise<boolean>);
  allowRequestsWithoutOriginCheck?: boolean;
  failureResponse?: Response | ((ctx: any) => Response | Promise<Response>);
};

export function createCsrfMiddleware(opts: CsrfMiddlewareOptions = {}) {
  const middleware = createMiddleware().server(async (ctx: any) => {
    if (opts.filter && !(await opts.filter(ctx))) {
      return ctx.next();
    }

    if (await isCsrfRequestAllowed(opts, ctx)) {
      return ctx.next();
    }

    return getFailureResponse(opts, ctx);
  });

  if (process.env.NODE_ENV !== "production") {
    Object.defineProperty(middleware, csrfSymbol, { value: true });
  }

  return middleware;
}

async function isCsrfRequestAllowed(opts: CsrfMiddlewareOptions, ctx: any) {
  const result = await getCsrfRequestValidationResult(opts, ctx);
  return result === true || (result === undefined && opts.allowRequestsWithoutOriginCheck === true);
}

async function getCsrfRequestValidationResult(
  opts: CsrfMiddlewareOptions,
  ctx: any,
): Promise<boolean | undefined> {
  const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
  if (fetchSite !== null) {
    return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
  }

  const origin = ctx.request.headers.get("Origin");
  if (origin !== null) {
    if (opts.origin) {
      return matchValue(opts.origin, origin, ctx);
    }

    return origin === new URL(ctx.request.url).origin;
  }

  const referer = ctx.request.headers.get("Referer");
  if (referer === null || opts.referer === false) {
    return undefined;
  }

  if (typeof opts.referer === "function") {
    return opts.referer(referer, ctx);
  }

  if (opts.origin) {
    const refererOrigin = getOriginFromUrl(referer);
    return refererOrigin !== undefined && matchValue(opts.origin, refererOrigin, ctx);
  }

  return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}

async function matchValue<TValue extends string>(
  matcher:
    | TValue
    | Array<TValue>
    | ((value: TValue, ctx: any) => boolean | Promise<boolean>),
  value: string,
  ctx: any,
) {
  if (typeof matcher === "function") {
    return matcher(value as TValue, ctx);
  }

  if (Array.isArray(matcher)) {
    return matcher.includes(value as TValue);
  }

  return value === matcher;
}

function getOriginFromUrl(url: string): string | undefined {
  try {
    return new URL(url).origin;
  } catch {
    return undefined;
  }
}

function isRefererSameOrigin(referer: string, requestOrigin: string): boolean {
  if (referer === requestOrigin) return true;
  if (!referer.startsWith(requestOrigin)) return false;
  if (referer.length === requestOrigin.length) return true;
  const code = referer.charCodeAt(requestOrigin.length);
  return code === 47 || code === 63 || code === 35;
}

async function getFailureResponse(opts: CsrfMiddlewareOptions, ctx: any): Promise<Response> {
  if (typeof opts.failureResponse === "function") {
    return opts.failureResponse(ctx);
  }

  return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
