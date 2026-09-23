// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html' ,//, now, wea re going to make allure report
 /* reporter : [
    ['line'],['allure-playwright',{outputFolder:"allure-results"}],
  ],*/
  //timeout: 40*1000,
 
  //retries : 1,

  use:{
    headless: true,
    screenshot: 'only-on-failure',
    //video : 'retain-on-failure',
   // trace : 'retain-on-failure'
  }

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    /* Configure projects for major browsers */
   /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

