const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const dotenv = require("dotenv");

dotenv.config();

const node_modulesPath = path.resolve(__dirname, "node_modules");
// // const publicPath = path.resolve(__dirname, '..', '..', '..', 'public');
// const srcPath = path.resolve(__dirname, "..", "..", "..", "src", "index.js");
const stylesPath = path.resolve(__dirname, "src", "presentation", "web", "styles");
const jsPath = path.resolve(__dirname, "public", "js");
const srcPath = path.resolve(__dirname, "src", "presentation", "web", "index.js");

module.exports = {
    devServer: {
        // contentBase: path.join(__dirname, "public"),
        writeToDisk: true,
        compress: true,
        clientLogLevel: "silent",
        port: process.env.UI_PORT_NUMBER,
        proxy: {
            "/": {
                target: `http://localhost:${process.env.API_PORT_NUMBER}`,
                changeOrigin: true,
            },
        },
    },
    entry: {
        sv: ["react", "react-dom", "react-router-dom", "@hot-loader/react-dom", "react-router", "dayjs"],
        sa: [srcPath],
    },
    output: {
        filename: "[name].js",
        path: jsPath,
        publicPath: jsPath,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve("babel-loader"),
                        options: {
                            cacheDirectory: true,
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/plugin-transform-runtime",
                                ["@babel/plugin-proposal-decorators", { legacy: true }],
                                "transform-class-properties",
                            ],
                            compact: false,
                        },
                    },
                ],
            },
            { test: /\.css$/i, use: ["to-string-loader", "css-loader"] },
            // { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader", // Run post css actions
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "../fonts",
                            publicPath: "/fonts",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({ root: jsPath }),
        new webpack.ProvidePlugin({
            React: "react", // ReactJS module name in node_modules folder
        }),
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify("production") },
        }),
        // new HtmlWebpackPlugin({ filename: path.resolve(__dirname, 'public', 'index.html') }),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         context: "/", // <- putting this line right under "options" did the trick
        //         sassLoader: {
        //             includePaths: [stylesPath],
        //         },
        //     },
        // }),
    ],
    mode: "development",
    resolve: {
        extensions: [".js"],
        modules: [node_modulesPath],
        alias: {
            app: path.resolve("./src/presentation/web"),
            api: path.resolve("./src/presentation/web/api"),
            containers: path.resolve("./src/containers"),
            components: path.resolve("./src/components"),
            utils: path.resolve("./src/presentation/web/utils"),
            "react-dom": "@hot-loader/react-dom",
        },
    },
};
