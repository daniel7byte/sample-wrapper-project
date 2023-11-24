import { SSTConfig } from "sst";
import { ApiStack } from "./stacks/ApiStack";

export default {
  config (_input) {
    return {
      name: "sample-wrapper-project",
      region: "us-east-1",
    };
  },
  stacks (app) {
    // Add stacks here
    app.stack(ApiStack);
  }
} satisfies SSTConfig;
