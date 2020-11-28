import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as s3Deploy from "@aws-cdk/aws-s3-deployment";
import * as route53 from "@aws-cdk/aws-route53";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as acm from "@aws-cdk/aws-certificatemanager";
import * as targets from "@aws-cdk/aws-route53-targets";
import { PriceClass } from "@aws-cdk/aws-cloudfront";

export interface InfrastructureStackProps extends cdk.StackProps {
  domain: string;
  subDomain: string;
  siteContentsPath: string;
}

export class InfrastructureStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: InfrastructureStackProps
  ) {
    super(scope, id, props);

    // Route53 hosted zone
    const domainHostedZone = route53.HostedZone.fromLookup(
      this,
      "DomainHostedZone",
      {
        domainName: props.domain,
      }
    );

    new cdk.CfnOutput(this, "Site", { value: props.domain });

    // The code that defines your stack goes there
    const bucket = new s3.Bucket(this, "WillwinWangBucket", {
      bucketName: props.domain,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
    });

    new cdk.CfnOutput(this, "Bucket", { value: bucket.bucketName });

    // Certificate
    const certificate = new acm.DnsValidatedCertificate(
      this,
      "sitecertificate",
      {
        domainName: props.domain,
        hostedZone: domainHostedZone,
        region: "us-east-1", // cloudfront only checks this region for certificates.
        subjectAlternativeNames: [props.subDomain],
      }
    );

    new cdk.CfnOutput(this, "CertificateArn", {
      value: certificate.certificateArn,
    });

    new cdk.CfnOutput(this, "CertificateRegion", {
      value: certificate.env.region,
    });

    const oia = new cloudfront.OriginAccessIdentity(this, "OIA", {
      comment: `OIA for Willwin Wang website.`,
    });

    // Cloudfront
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "WillwinWangCloudfront",
      {
        aliasConfiguration: {
          acmCertRef: certificate.certificateArn,
          names: [props.domain, props.subDomain],
          securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2019,
          sslMethod: cloudfront.SSLMethod.SNI,
        },
        priceClass: PriceClass.PRICE_CLASS_200,
        errorConfigurations: [
          {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
          {
            errorCode: 404,

            responseCode: 200,
            responsePagePath: "/index.html",
          },
        ],
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: oia,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    new cdk.CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
    });

    // Route53 alias record for CF Distribution
    new route53.ARecord(this, "DomainSiteAliasRecord", {
      zone: domainHostedZone,
      recordName: props.domain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    new route53.ARecord(this, "SubDomainSiteAliasRecord", {
      zone: domainHostedZone,
      recordName: props.subDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });

    // Deployment
    new s3Deploy.BucketDeployment(this, "DeployWithInvalidation", {
      sources: [s3Deploy.Source.asset(props.siteContentsPath)],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new cdk.CfnOutput(this, "CloudFrontDistributionDomainName", {
      value: distribution.distributionDomainName,
    });
  }
}
