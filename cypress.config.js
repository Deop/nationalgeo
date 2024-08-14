const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://www.nationalgeographic.com/",
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});
