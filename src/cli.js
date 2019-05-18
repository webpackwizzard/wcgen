#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
// business logic; called by binary in ../bin/webpack-wizard
exports.init = () => {
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
}
