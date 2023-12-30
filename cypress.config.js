const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,

  e2e: {
    baseUrl:"http://172.31.1.20:9999",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
