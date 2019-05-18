#!/usr/bin/env node

// ~/wcgen/sandbox ts-sandbox? given an arr of question-objects, will produce the 
// following output after value selection:
//
// ❯ node inquirer-question-list.js
//
// ? Choose coffee type Espresso ($5.99)
// ? Choose your sugar level Low (1 spoons)
// ? Do you prefer your coffee to be decaf? No
// ? Do you prefer your coffee to be cold? No
// ? How do you prefer your coffee to be served in Mug
// ? Do you prefer your coffee with a stirrer? Yes
//
// { coffeType: 'Espresso ($5.99)',
//   sugarLevel: 'Low (1 spoons)',
//   decaf: false,
//   cold: false,
//   servedIn: 'Mug',
//   stirrer: true }


const inquirer = require('inquirer');

// coffee types
const types = [
  { name: 'Espresso', price: '$5.99' },
  { name: 'Latte', price: '$4.50' },
  { name: 'Cappuchino', price: '$3.99' },
  { name: 'Americano', price: '$2.50' },
  { name: 'Macchiato', price: '$3.50' },
];
const typesPlain = types.map(function (o) {
  return o.name + ' (' + o.price + ')'; // convert to one line
});

// sugar levels
const sugar = [
  { name: 'Low', spoons: '1' },
  { name: 'Medium', spoons: '2' },
  { name: 'High', spoons: '3' },
  { name: 'Very High', spoons: '4' },
];
const sugarPlain = sugar.map(function (o) {
  return o.name + ' (' + o.spoons + ' spoons)'; // convert to one line
});

// served in
const servedIn = [
  "Mug",
  "Cup",
  "Takeway package"
];

const questions = [
  { type: 'list', name: 'coffeType', message: 'Choose coffee type', choices: typesPlain },
  { type: 'list', name: 'sugarLevel', message: 'Choose your sugar level', choices: sugarPlain },
  { type: 'confirm', name: 'decaf', message: 'Do you prefer your coffee to be decaf?', default: false },
  { type: 'confirm', name: 'cold', message: 'Do you prefer your coffee to be cold?', default: false },
  { type: 'list', name: 'servedIn', message: 'How do you prefer your coffee to be served in', choices: servedIn },
  { type: 'confirm', name: 'stirrer', message: 'Do you prefer your coffee with a stirrer?', default: true },
];

inquirer
  .prompt(questions)
  .then(function (answers) {
    console.log(answers);
  })
