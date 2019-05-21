const path = require('path');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const moduleConfig = require('./moduleLoadersConfig');

const generateWebpackConfig = {};

generateWebpackConfig.make = (answers) => {
  const sample = {
    entry: './src/index.js',
    output: {
      path: "CODE:path.resolve(__dirname, 'dist')",
      filename: 'bundle.js',
    },
    module: {},
  };

  sample.module.rules = [];

  answers.forEach((element) => {
    if (moduleConfig[element]) sample.module.rules.push(moduleConfig[element]);
    if (element === 'React Hot Loader') {
      sample.devServer = {
        contentBase: './dist',
      };
    }
    if (element === 'React') {
      sample.resolve = {
        extensions: [
          '.js',
          '.jsx',
        ],
      };
      // generate a babelrc file
      fs.writeFile('.babelrc',
        `{
         presets: [“@babel/preset-env”, “@babel/preset-react”]
        }`,
        (err) => {
          if (err) throw err;
        });
    }
  });

  fs.writeFile('webpack.config.js', `const path = require('path'); 
  module.exports = `, (err) => {
    if (err) throw err;
  });

  fs.appendFile(
    'webpack.config.js',
    JSON.stringify(sample, null, 2)
      .replace(/(?:\/\.)/g, '\/\\.')// magic that escapes the regex .\
      .replace(/"CODE:/g, '') // how we keep track of which quote to remove
      .replace(/\)"/g, ')') // closing of the Path dir with a  )
      .replace(/\!"/g, '')
      .replace(/"!/g, '')
      .replace(/"\w+"(?=:)/g, val => val.replace(/"/g, '')), // grabs all keys and remove Quotes
    (err) => {
      if (err) throw err;
    },
  );
};

module.exports = generateWebpackConfig;
