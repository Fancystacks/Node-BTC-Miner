const program = require('commander');

program
    .command('price')
    .description('Current price of coins')
    .action(() => console.log('Hello price'));

program.parse(process.argv);