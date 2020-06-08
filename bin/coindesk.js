#!/usr/bin/env node
const program = require('commander');
const package = require('../package.json');

program
  .version(package.version)
  .command('key', 'API Key info -- https://nomics.com')
  .command('check', 'View current value')
  .parse(process.argv);