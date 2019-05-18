const files = require('./lib/files');
const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');

//clear();
console.log(
  chalk.yellow(
    figlet.textSync('WebPackWizard', { horizontalLayout: 'full' })
  )
);
console.log(
  chalk.magenta(
    'Pink Fairy Armadillos'
  )
);

