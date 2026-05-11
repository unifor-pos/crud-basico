const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:8080',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
