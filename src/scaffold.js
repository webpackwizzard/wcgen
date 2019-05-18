#!/usr/bin/env node

const inquirer = require('inquirer');
const opts = require('./opts')

setTimeout(() => {
  inquirer.prompt(opts)
    .then(answers => {
      console.log(Object.values(answers))
    });
}, 1000)
