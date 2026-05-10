const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");

const envPath = path.resolve(__dirname, 'site', '.env');

if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
} else {
  console.error(`\n[Cypress Config] ERRO: Arquivo .env não encontrado em: ${envPath}\n`);
}

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.baseUrl = process.env.APP_URL || 'http://localhost:8080';
      console.log(`\n[Cypress Config] Base URL definida como: ${config.baseUrl}\n`);
      return config;
    }
  },
});
