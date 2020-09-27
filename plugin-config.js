// This is the first file loaded and defines what things your plugin can do!

import renderDialog from "./src/render-dialog.js"

export default () => {
  return {
    transformPlugins: [
      {
        name: "Delete All Samples",
        renderDialog,
      },
    ],
    importPlugins: [],
    interfacePlugins: [],
    authenticationPlugins: [],
  }
}
