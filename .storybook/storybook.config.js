const path = require("path");

module.exports = {
  webpackFinal: (config) => {
    // Add the CSS file to the "rules" array
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "./src"),
    });
    return config;
  },
};
