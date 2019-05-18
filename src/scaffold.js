#!/usr/bin/env node

const inquirer = require('inquirer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const opts = require('./opts')

// each option has the structure: 
// { 
//   type: '$type', 
//   name: '$name', 
//   choices: '$[choicesArr]',
//   generatedOutput: '${webpackDevConfigOptOutput}',
// }

setTimeout(() => {
  inquirer.prompt(opts).then(answers => {
    // do something with their answers
    const vals = Object.values(answers)

    vals.forEach(a => {
      console.log('pipe output to shell like: npm i -S', a)
    })

    // could call exec on the above like so
    async function lsEx() {
      const { stdout } = await exec('ls');
      await console.log('stdout:', stdout);
    }
    lsEx();
  })
}, 1000)
