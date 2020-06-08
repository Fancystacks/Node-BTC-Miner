const program = require("commander");

program
    .command('set')
    .description('Set API Key -- Get at https://nomics.com')
    .action(() => console.log('fuck'));

    program
    .command('show')
    .description('Show API Key')
    .action(() => console.log('fuck'));

    program
    .command('remove')
    .description('Delete API Key')
    .action(() => console.log('fuck'));
    
program.parse(process.argv);