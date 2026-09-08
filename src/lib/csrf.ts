import {
  createCsrfMiddleware as createTanstackCsrfMiddleware,
  type CsrfMiddlewareOptions,
} from "@tanstack/start-client-core";

export function createCsrfMiddleware(opts: CsrfMiddlewareOptions = {}) {
  return createTanstackCsrfMiddleware(opts);
}
