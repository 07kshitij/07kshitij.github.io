const path = require('path');

module.exports = {
  entry: {
    main: "./src/index.tsx",
    blog: "./src/blog.tsx"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/'
  },
  resolve: {
    // look for these file extensions
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // css-loader to bundle all the css files into one file
        // style-loader to add all the styles  inside the style tag of the document
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true, // Helpful to avoid 404s in development
  }
};
