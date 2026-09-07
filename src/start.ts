import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

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

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware =
  typeof createCsrfMiddleware === "function"
    ? createCsrfMiddleware({
        filter: (ctx) => ctx.handlerType === "serverFn",
      })
    : createMiddleware().server(async (ctx: any) => {
        if (ctx.handlerType === "serverFn") {
          const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
          if (
            fetchSite !== null &&
            fetchSite !== "same-origin" &&
            fetchSite !== "same-site" &&
            fetchSite !== "none"
          ) {
            return new Response("CSRF Validation Failed", { status: 403 });
          }
          const origin = ctx.request.headers.get("Origin");
          if (origin !== null) {
            try {
              const reqOrigin = new URL(ctx.request.url).origin;
              if (origin !== reqOrigin) {
                return new Response("CSRF Validation Failed", { status: 403 });
              }
            } catch {
              // ignore URL parsing errors
            }
          }
        }
        return ctx.next();
      });

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
