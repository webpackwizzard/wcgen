#!/usr/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const scaffold = require('./scaffold');

const cliScaffold = {};

cliScaffold.init = () => {
  console.log(chalk.yellow(figlet.textSync('WebPackWizard', { horizontalLayout: 'full', font: 'Ghost' })));
  console.log(chalk.magenta('Pink Fairy Armadillos'));
  scaffold.beginPrompting();
};

module.exports = cliScaffold;
