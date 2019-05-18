const moduleConfig = require('./moduleLoadersConfig');
const path = require('path');

// console.log(moduleConfig.LESS);

const answers = ['CSS', 'LESS'];
const sample = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {}
};

sample.module.rules = [];

answers.forEach(element => {
  sample.module.rules.push(moduleConfig[element]);
});

console.log('line 24', sample);
