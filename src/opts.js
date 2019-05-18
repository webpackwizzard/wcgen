module.exports = options = [
  {
    type: 'list',
    message: 'select CSS preprocessor',
    name: 'cssPreprocessor',
    choices: [
      "SASS", "LESS", "POSTCSS"
    ]
  },
  {
    type: 'list',
    message: 'are you using a transpiler',
    name: 'transpiler',
    choices: [
      "Babel", "TypeScript"
    ]
  }
]
