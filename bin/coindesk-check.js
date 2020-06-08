const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Current price of coins')
    .option('--coin <type>', 
    'Add coin types via CSV', 
    'BTC,ETH,XRP')
    .option('--curr <currency>', 
    'Choose exchange currency', 
    'USD')
    .action((cmd) => check.price(cmd));

program.parse(process.argv);