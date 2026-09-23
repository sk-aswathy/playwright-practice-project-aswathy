//create a test function -- by heart
//test name - kebab-case

import test from "@playwright/test"

test("test-task-one", async ({browser})=>{
     const context = await browser.newContext();
     const page =  context.newPage();
      await page.goto("https://www.google.com/");
})