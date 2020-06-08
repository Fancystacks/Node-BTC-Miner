const program = require('commander');
const key = require('../commands/key');

program
  .command('set')
  .description('API Key --- Get one at https://nomics.com')
  .action(key.set);

program
  .command('show')
  .description('Show current API Key')
  .action(key.show);

program
  .command('remove')
  .description('Remove current API Key')
  .action(key.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}