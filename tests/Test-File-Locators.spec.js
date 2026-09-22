
import {test,expect} from "@playwright/test"

test("@web Example1" , async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://selenium.qabible.in/form-submit.php");
   // await page.locator(".form-control").nth(0).fill("ASWATHY"); //.form-control --CSS SELECTOR
   await page.locator(".form-control").first().fill("ASWATHY")
   await page.locator("#validationCustom02").fill("Krishnambika") //id we use#
   await page.locator('input[placeholder="Username"]').fill("achuttyy") //other attributes tagname[attribute &value]
   await page.locator('//input[@placeholder="City"]').fill("tvm");///xpath
   //special locarot methods
   await page.getByPlaceholder("State").fill("Kerala");
   await page.getByLabel("Zip").fill("695583");
   const checkbox = page.locator('input[type="checkbox"]');
   await checkbox.check();
   const submitButton = page.getByRole('button', {name:"Submit form"});
   await submitButton.click();
   //getbyrole() --button,checkbox,radiobutton, alertbox,link etc
   const successMessage = page.locator("#message-one");
   const msg = await successMessage.isVisible();
   console.log(msg);
   //await expect(msg).toBeFalsy(); -- pass is msg is fail
   //await expect(successMessage).toBeVisible(); //default timeout of assetion 5000ms (normaly timout is 3000ms)
    await page.pause();
})