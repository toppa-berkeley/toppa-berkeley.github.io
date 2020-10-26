module.exports = [
  {
    entry: "./scss/blogs/style.scss",
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: "style-bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "css/blogs/style.css",
              },
            },
            { loader: "extract-loader" },
            { loader: "css-loader" },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),
            
                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                  includePaths: ['./node_modules']
                },
              }
            }
          ],
        },
      ],
    },
  },
];
