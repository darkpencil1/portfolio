import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Default app URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Test file pattern
    supportFile: "cypress/support/commands.ts", // Support file location
  },
  video: false, // Enable video recording
  screenshotsFolder: "cypress/screenshots",
});
