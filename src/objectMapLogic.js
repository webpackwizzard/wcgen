const moduleConfig = require('./moduleLoadersConfig');
const path = require('path');
const fs = require('fs');
const util = require('util');
const generateWebpackConfig = {}

generateWebpackConfig.make = (answers) => {
  // console.log('moduleConfig', moduleConfig[answers[0]])
//  console.log('answers', answers)

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
    if (moduleConfig[element]) sample.module.rules.push(moduleConfig[element]);
    if (element === 'React Hot Loader') {
      sample.devServer = {
        contentBase: './dist'
      }
    }
    if (element === 'React') {
      sample.resolve = {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    }

  });

  //console.log('this is the sample', sample)

  fs.writeFile('webpack.config.js', 'module.exports = ', err => {
    if (err) throw err;
  });

  fs.appendFile(
    'webpack.config.js',
    JSON.stringify(sample, null, 2)
      .replace(/(?:\/\.)/g, '\/\\.')
      .replace(/"CODE:/g, '')
      .replace(/\)"/g, ')')
      .replace(/\!"/g, '')
      .replace(/"!/g, '')
      .replace(/"\w+"(?=:)/g, val => val.replace(/"/g, '')),
    err => {
      if (err) throw err;
    }
  );
}

module.exports = generateWebpackConfig
