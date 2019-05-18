module.exports = options = [
  {
    type: 'checkbox',
    name: 'LESS { installs: less-/style-/css-loaders }',
    choices: ["yes", "no"], //  need to define a query syntax
    dependencies: [
      "less-loader",
      "less",
      "style-loader",
      "css-loader"
    ],
    generatedOut: `{
                "test": /\.less$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
          }`
  },
  {
    type: 'checkbox',
    name: 'Are you using CSS?',
    choices: [
      "style-loader",
      "css-loader"
    ],
    generatedOut: ` {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
          }`

  },
  {
    type: 'checkbox',
    name: 'Are you using SASS/SCSS?',
    choices: [
      "sass-loader",
      "node-sass",
      "style-loader",
      "css-loader"
    ],
    generatedOutput: `{
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }`
  },
  {
    type: 'checkbox',
    name: 'Are you using POSTCSS?',
    choices: [
      "style-loader",
      "css-loader",
      "postcss-loader",
      "precss",
      "autoprefixer"
    ],
    generatedOutput: `
      {
          "test": /\.css$/,
          "use": [
              "style-loader",
              "css-loader",
              {
                  "loader": "postcss-loader",
                  "options": {
                      "ident": "postcss",
                      "plugins": (loader) => [
                        require('postcss-import')(),
                        require('postcss-cssnext')(),
                        require('autoprefixer')(),
                        require('cssnano')()
                      ]
                  }
              }
          ]
      }`
  },
  {
    name: 'ESLint'
  },
  {
    name: 'JShint'
  },
  {
    name: 'Babel - ES6+'
  },
  {
    name: 'React JSX'
  },
  {
    name: 'CoffeeScript'
  },
  {
    name: 'TypeScript'
  },
  {
    name: 'Polymer'
  },
  {
    name: 'Vue'
  }
]
