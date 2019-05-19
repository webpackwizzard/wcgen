const inquirer = require('inquirer');
module.exports = options = [
  {
    type: 'list',
    message: 'Select Your Main Library',
    name: 'Libary',
    choices: [
      "React", "Vue",
    ]
  },
  {
    type: 'list',
    message: 'Select CSS preprocessor',
    name: 'cssPreprocessor',
    choices: [
      "SCSS", "LESS", "POSTCSS", "Sylus"
    ]
  },
  {
    type: 'list',
    message: 'Select your transpiler',
    name: 'transpiler',
    choices: [
      "Babel", "TypeScript"
    ]
  },
  {
    type: 'list',
    message: 'Will you have Images?',
    name: 'Images',
    choices: [
      "Image", "None",
    ]
  },
  {
    type: 'list',
    message: 'Will you need a server?',
    name: 'Server',
    choices: [
      "React Hot Loader", "None",
    ]
  },

 
 
]
