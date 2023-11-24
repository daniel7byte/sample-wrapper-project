import { StackContext, Api } from "sst/constructs";

export function ApiStack ({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    defaults: {
      function: {

      },
    },
    routes: {
      "GET /products": "packages/functions/src/products/getAll.handler",
      "GET /products/{id}": "packages/functions/src/products/getById.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
