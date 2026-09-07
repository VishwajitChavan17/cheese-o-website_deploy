import { createStart } from "@tanstack/react-start";

import { createCsrfMiddleware } from "@/lib/csrf";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => {
    const method = ctx.request.method;
    return ctx.handlerType === "serverFn" && method !== "GET" && method !== "HEAD";
  },
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware],
}));
