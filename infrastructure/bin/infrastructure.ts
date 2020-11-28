#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { InfrastructureStack } from "../lib/infrastructure-stack";
import * as path from "path";

const app = new cdk.App();

new InfrastructureStack(app, "InfrastructureStack", {
  domain: process.env.DOMAIN || "willwinwang.com",
  subDomain: process.env.SUBDOMAIN || "www.willwinwang.com",
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
  siteContentsPath:
    process.env.SITE_CONTENTS_PATH || path.join("../client/build"),
});
