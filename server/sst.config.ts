/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "server",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2("EvseListApi");
    const MongoURL = new sst.Secret("MongoURL");
    api.route("GET /", {
      handler: "src/index.handler",
      link: [MongoURL],
    });
  },
});
