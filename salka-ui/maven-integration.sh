#!/bin/bash

set -e

npm prune
npm cache clean
npm install

rm -rf typings
./typings-cli install

./grunt build