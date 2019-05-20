#!/usr/bin/env node

const inquirer = require('inquirer');
const opts = require('./opts')
const generateWebpackConfig = require('../src/objectMapLogic')

const scaffold = {}

scaffold.beginPrompting = () => {
  inquirer.prompt(opts)
    .then(answers => {
      generateWebpackConfig.make(Object.values(answers))
    })
}
// test
module.exports = scaffold
