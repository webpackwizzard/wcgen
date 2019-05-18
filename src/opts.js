module.exports = options = [
  {
    type: 'checkbox',
    name: 'are you using a css-preprocessor?',
    choices: [
      'Less', 'Sass', 'Scss', 'PostCSS'
    ],
    generatedOut: ` {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
          }`

  }
]
