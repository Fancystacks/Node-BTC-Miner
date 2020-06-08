#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');

program
.version(package.version)
.command('key', 'API info -- https://nomics.com')
.parse(process.argv);

console.log("Hello from bitcoin");