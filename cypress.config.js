const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'en17ea',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('file:preprocessor', cucumber())
      
    },
    specPattern: 'cypress/integration/examples/*.js',
    defaultCommandTimeout: 20000,
    env:{
      url:'https://rahulshettyacademy.com/'
    },
    projectId:"en17ea",
    reporter: 'mochawesome',
    retries: {
      runMode:2,
      openMode:1
    }
  }
});
