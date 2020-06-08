const program = require("commander");

program
    .command('set')
    .description('Set API Key -- Get at https://nomics.com')
    .action(() => console.log('fuck'));

program.parse(process.argv);