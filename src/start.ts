import { createStart, csrfSymbol } from "@tanstack/react-start";

const csrfMiddleware = {
  [csrfSymbol]: true,
  options: {
    server: async (ctx: any) => {
      const request = ctx.request;

      const fetchSite = request.headers.get("Sec-Fetch-Site");
      if (fetchSite !== null) {
        if (
          fetchSite !== "same-origin" &&
          fetchSite !== "same-site" &&
          fetchSite !== "none"
        ) {
          return new Response("CSRF Validation Failed", { status: 403 });
        }
        return ctx.next();
      }

      const origin = request.headers.get("Origin");
      if (origin !== null) {
        try {
          const reqOrigin = new URL(request.url).origin;
          if (origin !== reqOrigin) {
            return new Response("CSRF Validation Failed", { status: 403 });
          }
        } catch {
          return new Response("CSRF Validation Failed", { status: 403 });
        }
        return ctx.next();
      }

      const referer = request.headers.get("Referer");
      if (referer !== null) {
        try {
          const refererOrigin = new URL(referer).origin;
          const reqOrigin = new URL(request.url).origin;
          if (refererOrigin !== reqOrigin) {
            return new Response("CSRF Validation Failed", { status: 403 });
          }
        } catch {
          return new Response("CSRF Validation Failed", { status: 403 });
        }
        return ctx.next();
      }

      if (request.method === "GET" || request.method === "HEAD") {
        return ctx.next();
      }

      return new Response("CSRF Validation Failed", { status: 403 });
    },
  },
} as any;

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware],
}));
