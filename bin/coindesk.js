#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .command('key', 'API Key --- https://nomics.com')
  .command('check', 'View current exchange price')
  .parse(process.argv);
