/* 

Babel - ES6+
npm install babel-core babel-loader babel-preset-env --save-dev

React JSX
npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev

CoffeeScript
npm install coffee-loader --save-dev

TypeScript
npm install ts-loader --save-dev

Vue
npm install vue-loader --save-dev

Polymer
npm install babel-loader polymer-webpack-loader --save-dev


CSS
npm install style-loader css-loader --save-dev

LESS
npm install less style-loader css-loader less-loader --save-dev

POSTCSS
npm install postcss style-loader css-loader postcss-loader postcss-import postcss-cssnext autoprefixer cssnano --save-dev

STYLUS
npm install stylus style-loader css-loader stylus-loader --save-dev


ESLint
npm install eslint eshint-loader postcss style-loader css-loader postcss-loader postcss-import postcss-cssnext autoprefixer cssnano --save-dev

JShint
npm install jshint jshint-loader --save-dev

Images
npm install --save-dev file-loader

CSV
npm install --save-dev csv-loader 

XML
npm install --save-dev xml-loader

Fonts
npm install --save-dev file-loader


*/

const moduleLoaders = {
  // Babel - ES6+
  Babel: {
    test: '!/.js$/!',
    exclude: '!/(node_modules|bower_components)/!',
    use: {
      loader: ['babel-loader', 'jshint-loader'],
      options: {
        presets: ['env']
      }
    }
  },
  // React JSX
  React: {
    test: "!/.(js|jsx)$/!",
    exclude: "!/node_modules/!",
    use: {
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  },
  // CoffeeScript
  CoffeeScript: {
    test: "!/\.coffee$/!",
    exclude: "!/node_modules/!",
    use: 'coffee-loader'
  },
  // TypeScript
  TypeScript: {
    test: "!/\.tsx?$/!",
    exclude: "!/node_modules/!",
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  },
  // Vue
  Vue: {
    test: "!/\.vue$/!",
    exclude: "!/node_modules/!",
    use: 'vue-loader'
  },
  // Polymer
  Polymer: {
    test: "!/\.html$/!",
    exclude: "!/node_modules/!",
    use: ['babel-loader', 'polymer-webpack-loader']
  },
  // CSS
  CSS: {
    test: "!/.css$/!",
    use: ['style-loader', 'css-loader']
  },
  // LESS
  LESS: {
    test: "!/.less$/!",
    use: ['style-loader', 'css-loader', 'less-loader']
  },
  // SCSS
  SCSS: {
    test: "!/\.scss$/!",
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  // POSTCSS
  // POSTCSS: {
  //   test: /\.css$/,
  //   use: [
  //     'style-loader',
  //     'css-loader',
  //     {
  //       loader: 'postcss-loader',
  //       options: {
  //         ident: 'postcss',
  //         plugins: loader => [
  //           require('postcss-import')(),
  //           require('postcss-cssnext')(),
  //           require('autoprefixer')(),
  //           require('cssnano')()
  //         ]
  //       }
  //     }
  //   ]
  // },
  // stylus
  STYLUS: {
    test: "!/\.styl$/!",
    use: ['style-loader', 'css-loader', 'stylus-loader']
  },

  // ESLint
  ESLint: {
    enforce: 'pre',
    test: "!/\.(js|jsx)$/!",
    exclude: "!/node_modules/!",
    use: 'eslint-loader'
  },
  // JShint
  JShint: {
    enforce: 'pre',
    test: "!/\.(js|jsx)$/!",
    exclude: /node_modules/,
    use: 'jshint-loader'
  },
  // Images
  Image: {
    test: "!/\.(png|svg|jpg|gif)$/!",
    use: ['file-loader']
  },
  //
  Fonts: {
    test: "!/\.(woff|woff2|eot|ttf|otf)$/!",
    use: ['file-loader']
  },
  XML: {
    test: "!/\.xml$/!",
    use: ['xml-loader']
  }
};

module.exports = moduleLoaders;
