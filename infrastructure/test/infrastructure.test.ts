import { expect as expectCDK, SynthUtils, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as Infrastructure from "../lib/infrastructure-stack";
import * as path from "path";

describe("Infrastructure stack", () => {
  let stack: Infrastructure.InfrastructureStack;
  let app: cdk.App;

  beforeEach(() => {
    app = new cdk.App();
    // WHEN
    stack = new Infrastructure.InfrastructureStack(app, "MyTestStack", {
      domain: "foo.com",
      subDomain: "www.foo.com",
      siteContentsPath: path.join("../client/build"),
      env: {
        account: "foo",
        region: "ap-southeast-2",
      },
    });
    // THEN
  });

  test("match snapshot", () => {
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });

  test("S3 bucket exists", () => {
    expectCDK(stack).to(haveResource("AWS::S3::Bucket"));
  });

  test("Cloudfront exists", () => {
    expectCDK(stack).to(haveResource("AWS::CloudFront::Distribution"));
  });
});
