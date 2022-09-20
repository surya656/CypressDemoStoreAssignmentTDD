const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
      overwrite: true,
      html: true,
      json: false
  },
  e2e: {
      chromeWebSecurity: false,
      defaultCommandTimeout: 12000,
      pageLoadTimeout: 80000,
      env: {
          url: 'http://automationpractice.com/index.php',
      },
      retries: {
              runMode: 2,
      },
      

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/specs/*.spec.js'
  },
});
