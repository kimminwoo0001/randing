const path = require("path");

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }: any) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@containers": path.resolve(__dirname, "src/containers"),
      },
    },
  });
};
