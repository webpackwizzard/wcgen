#!/usr/bin/env node

const inquirer = require('inquirer');
const opts = require('./opts');
const generateWebpackConfig = require('../src/objectMapLogic');

// const moduleConfig = require('./moduleLoadersConfig');
const packageInstaller = require('../package-installer');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const Progress = CLI.Progress;
const thisPercentBar = new Progress(20);
const chalk = require('chalk');
const scaffold = {};

const mapModulesToLoaders = {
  Babel: ['babel-loader', '@babel/preset-env', 'jshint-loader'],
  React: ['babel-loader', '@babel/preset-env', '@babel/preset-react'],
  CoffeeScript: ['coffee-loader'],
  TypeScript: ['ts-loader'],
  Vue: ['vue-loader'],
  Polymer: ['babel-loader', 'polymer-webpack-loader'],
  CSS: ['style-loader', 'css-loader'],
  LESS: ['style-loader', 'css-loader', 'less-loader'],
  SCSS: ['style-loader', 'css-loader', 'sass-loader'],
  STYLUS: ['style-loader', 'css-loader', 'stylus-loader'],
  ESLint: ['eslint-loader'],
  JShint: ['jshint-loader'],
  Image: ['file-loader'],
  Fonts: ['file-loader'],
  XML: ['xml-loader']
};

scaffold.beginPrompting = () => {
  inquirer.prompt(opts).then(answers => {
    const answersArray = Object.values(answers);
    const status = new Spinner('Generating Webpack  Config please wait...');
    status.start();
    generateWebpackConfig.make(answersArray);

    // npm package install
    
    let percent = 0;
    const intervalId = setInterval(function () {
      percent += 0.01;
      process.stdout.write(thisPercentBar.update(percent) + '\r');
      if (percent > 1.0) {
        clearInterval(intervalId);
        process.stdout.write('\n');
        console.log(chalk.green("WebPack generated Successfully"));
        status.stop();
        const packagesToInstall = ['webpack'];
        answersArray.forEach(element => {
          //console.log('elm',element)
          if(mapModulesToLoaders[element] === undefined) return
        const packages = mapModulesToLoaders[element];
           console.log(packages);
          packages.forEach(pkg => {
            if (!packagesToInstall.includes(pkg)) {
              if (pkg.includes('babel')) packagesToInstall.push('@babel/core');
              packagesToInstall.push(pkg);
            }
          });
        });
        console.log('Installing... ', ...packagesToInstall);
        packagesToInstall.forEach(pkg => {
          packageInstaller.spawnInstaller(pkg);
        });
      }
    }, 60);

  });
};

// scaffold.beginPrompting();
module.exports = scaffold;
