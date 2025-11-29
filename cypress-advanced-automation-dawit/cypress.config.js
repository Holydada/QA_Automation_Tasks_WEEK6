
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: '',
    defaultCommandTimeout: 12000,
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
  }
})
