// This is the first file loaded and defines what things your plugin can do!

module.exports = {
  transformPlugins: [
    {
      name: "Delete All Samples",
      renderDialog: require("./src/render-dialog"),
    },
  ],
  importPlugins: [],
  interfacePlugins: [],
  authenticationPlugins: [],
}
