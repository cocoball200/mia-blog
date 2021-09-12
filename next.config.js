const path = require("path");
const sassResourcesLoader = require("sass-resources-loader");
const withLess = require("@zeit/next-less");

if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});
// module.exports = {
//   reactStrictMode: true,
//   webpack: {
//     alias: {},
//     plugins: {
//       add: [] /* An array of plugins */,
//       remove:
//         [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
//     },
//   },
//   plugins: [
//     {
//       plugin: sassResourcesLoader,
//       options: {
//         resources: ["./styles/table.scss"],
//       },
//     },
//   ],
// };

module.exports = {
  sassOptions: {
    includePaths: path.join(__dirname, "styles"),
  },
};
