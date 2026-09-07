import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// CSRF Protection Middleware for Server Functions
// Protects server functions from cross-site request forgery by validating
// same-origin request headers (Sec-Fetch-Site, Origin, and Referer).
const csrfMiddleware = createMiddleware().server(async (ctx: any) => {
  if (ctx.handlerType === "serverFn") {
    const request = ctx.request;

    // 1. Sec-Fetch-Site validation
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

    // 2. Origin validation
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

    // 3. Referer validation
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

    // Allow safe read-only methods (GET/HEAD)
    if (request.method === "GET" || request.method === "HEAD") {
      return ctx.next();
    }

    // Unverified cross-origin mutation request
    return new Response("CSRF Validation Failed", { status: 403 });
  }

  return ctx.next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
