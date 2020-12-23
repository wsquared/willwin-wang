#!/usr/bin/env bash

if [[ $# -ge 5 ]]; then
    export CDK_DEPLOY_ACCOUNT=$1
    export CDK_DEPLOY_REGION=$2
    export DOMAIN=$3
    export SUBDOMAIN=$4
    export SITE_CONTENTS_PATH=$5
    shift; shift; shift; shift; shift
    npx cdk deploy "$@" --require-approval=never
    exit $?
else
    echo 1>&2 "Provide AWS account and region as first two args."
    echo 1>&2 "Provide your domain name and sub domain name as third and fourth args."
    echo 1>&2 "Provide the path of where your static assets are located as fifth arg."
    echo 1>&2 "Additional args are passed through to cdk deploy."
    exit 1
fi