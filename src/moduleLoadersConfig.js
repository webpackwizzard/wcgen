
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
    test: "!/\.css$/!",
    use: ['style-loader', 'css-loader']
  },
  // LESS
  LESS: {
    test: "!/\.less$/!",
    use: ['style-loader', 'css-loader', 'less-loader']
  },
  // SCSS
  SCSS: {
    test: "!/\.scss$/!",
    use: ['style-loader', 'css-loader', 'sass-loader']
  },

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
