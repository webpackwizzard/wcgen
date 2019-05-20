const moduleConfig = require('./moduleLoadersConfig');
const path = require('path');
const fs = require('fs');
const util = require('util');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const chalk = require('chalk');
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

  const status = new Spinner('Generating Webpack  Config please wait...');
  status.start();
  fs.writeFile('webpack.config.js', `const path = require('path'); 
  module.exports = `, err => {
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
  const Progress = CLI.Progress;
  const thisPercentBar = new Progress(20);
  let percent = 0;
  const intervalId = setInterval(function () {
    percent += 0.01;
    process.stdout.write(thisPercentBar.update(percent) + '\r');
    if (percent > 1.0) {
      clearInterval(intervalId);
      process.stdout.write('\n');
      console.log(chalk.green("WebPack generated Successfully"));
      status.stop();
      // process.exit(0);
    }
  }, 60);
}

module.exports = generateWebpackConfig
