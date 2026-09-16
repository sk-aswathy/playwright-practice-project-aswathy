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
  reporter: 'html',
  // now, we are going to make allure report
  //reporter : [
  //  ['line'],['allure-playwright',{outputFolder:"allure-results"}],
  //],
  timeout: 40*1000,
 
  retries : 1,

 

projects:[
{
name : 'ChromeProject',
 use:{
    headless: false,
    screenshot: 'only-on-failure',
    video : 'retain-on-failure',
    trace : 'retain-on-failure',
    browserName:'chromium'
  },
},

{
name : 'FireFoxProject',
 use:{
    headless: false,
    screenshot: 'only-on-failure',
    video : 'retain-on-failure',
    trace : 'retain-on-failure',
    browserName: 'firefox',
  /*  */},
},

{
name : 'WebkitProject',
 use:{
   // viewport:{width:500 , height:400},
    ...devices['Galaxy A55'],
    permissions : ['microphone','camera','geolocation'],
    //geolocation : {latitude:9.9 , longitude:156.1} ,
    ignoreHTTPSErrors : true, //ignores certificate/http errors
    headless: false,
    screenshot: 'only-on-failure',
    video : 'retain-on-failure',
    trace : 'retain-on-failure',
    browserName: 'webkit'
  },
}

]

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    /* Configure projects for major browsers */
   /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

