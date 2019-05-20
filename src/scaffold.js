#!/usr/bin/env node

const inquirer = require('inquirer');
const opts = require('./opts');
const generateWebpackConfig = require('../src/objectMapLogic');

// const moduleConfig = require('./moduleLoadersConfig');
const packageInstaller = require('../package-installer');

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
    generateWebpackConfig.make(answersArray);

    // npm package install

    let packagesToInstall = ['webpack'];
    answersArray.forEach(element => {
      const packages = mapModulesToLoaders[element];
      // console.log(packages);
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
  });
};

// scaffold.beginPrompting();
module.exports = scaffold;
