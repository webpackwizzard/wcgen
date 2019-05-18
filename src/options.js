var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: `select which options your project will be using`,
      name: 'defaultOptions',
      choices: [
        new inquirer.Separator(' = styling & css-preprocessers = '),
        {
          name: 'Are you using LESS?',
          checked: false,
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
          name: 'Are you using CSS?',
          checked: false,
          generatedOut: ` {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
          }`

        },
        {
          name: 'Are you using SASS/SCSS?',
          checked: false,
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
          name: 'Are you using POSTCSS?',
          checked: false,
          generatedOutput: `{
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "ident": "postcss",
                            "plugins": (loader) => [require('postcss-import')(),require('postcss-cssnext')(),require('autoprefixer')(),require('cssnano')()]
                        }
                    }
                ]
            }`
        },
        {
          name: 'Are you using STYLUS?',
          checked: false,
          generatedOutput: `{
                "test": /\.styl$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            }`
        },
        new inquirer.Separator(' = Linting = '),
        {
          name: 'ESLint'
        },
        {
          name: 'JShint'
        },
        new inquirer.Separator(' = Transpilation ='),
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
          name: 'Vue',
          moduleRequired: 'vue-webpack-loader'
        }
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'test to query answers array';
        }
        return true;
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });
