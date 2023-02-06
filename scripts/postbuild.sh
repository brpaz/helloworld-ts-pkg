#!/usr/bin/env sh
# This script is executed after the build process is complete and it is used to generate a package.json file with the correct "type" field to support both ESM and CommonJS modules.

echo "{ \"type\": \"module\" }" > dist/esm/package.json

echo "{ \"type\": \"commonjs\" }" > dist/cjs/package.json