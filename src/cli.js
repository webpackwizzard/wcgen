#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');

const scaffold = require('./scaffold.js');

// business logic; called by binary in ../bin/webpack-wizard
exports.init = () => {
  // displays logo & team name
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

  // launches options flow
  scaffold.init
}
