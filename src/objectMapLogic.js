const moduleConfig = require('./moduleLoadersConfig');
const path = require('path');
var fs = require('fs');

const util = require('util');
// console.log(moduleConfig.LESS);

const answers = ['CSS', 'LESS', 'React'];
const sample = {
  entry: './src/index.js',
  output: {
    path: "CODE:path.resolve(__dirname, 'dist')",
    filename: 'bundle.js'
  },
  module: {}
};

sample.module.rules = [];

answers.forEach(element => {
  sample.module.rules.push(moduleConfig[element]);
});

fs.writeFile('testconfig.js', 'module.exports = ', err => {
  if (err) throw err;
});
fs.appendFile(
  'testconfig.js',
  JSON.stringify(sample, null, 2)
    .replace(/"CODE:/g, '')
    .replace(/\)"/g, ')')
    .replace(/\!"/g, '')
    .replace(/"!/g, '')
    .replace(/"\w+"(?=:)/g, val => val.replace(/"/g, '')),
  err => {
    if (err) throw err;
  }
);
