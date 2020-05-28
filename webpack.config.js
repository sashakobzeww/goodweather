const path = require("path");
const fs = require("fs");
require("babel-polyfill");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require('autoprefixer');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
  entry: ["babel-polyfill", "./src/js/index.js", "./src/scss/style.scss"],
  output: {
    filename: "./js/bundle.js"
  },
  devServer: {
    host: '127.0.0.1',
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    open: true,
    port: 8081
  },
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },
  module: {
    rules: [{
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery'
      },
      {
        loader: 'expose-loader',
        options: '$'
      }
      ]
    }, {
      test: /\.(sass|scss|css)$/,
      include: path.resolve(__dirname, "src/scss"),
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            url: false
          }
        },
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            sourceMap: true,
            plugins: () => [
              require("cssnano")({
                preset: [
                  "default",
                  {
                    discardComments: {
                      removeAll: true
                    }
                  }
                ]
              }),
              require("autoprefixer")({
                grid: true,
                overrideBrowserslist: ['ie >= 10',
                  'ie_mob >= 10',
                  'ff >= 30',
                  'chrome >= 21',
                  'safari >= 6',
                  'opera >= 23',
                  'ios >= 7',
                  'android >= 4.4',
                  'bb >= 10']
              })
            ],
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    },
    {
      test: /\.html$/,
      include: path.resolve(__dirname, "src/html/includes"),
      use: ["raw-loader"]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([{
      from: "./src/fonts",
      to: "./fonts"
    },
    {
      from: "./src/favicon",
      to: "./favicon"
    },
    {
      from: "./src/img",
      to: "./img"
    },
    {
      from: "./src/uploads",
      to: "./uploads"
    }
    ])
  ].concat(htmlPlugins)
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};