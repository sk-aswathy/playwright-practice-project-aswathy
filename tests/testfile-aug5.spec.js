import {test,expect} from "@playwright/test"

test("checkbox-test" , async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://selenium.qabible.in/index.php");
const inputForm = page.getByRole("link", {name:"Input Form"});
await inputForm.click();
const checkboxDemo = page.getByRole("link", {name:"Checkbox Demo"})
await checkboxDemo.click();
const singleChkBx = page.getByLabel("Click on this check box");
await singleChkBx.click();
await page.pause();
})

test("radioButton-test", async({page})=>{
//await page.newPage();
await page.goto("https://selenium.qabible.in/index.php");
const newForm =  page.getByRole("link" , {name: "Input Form"});
await newForm.click();
const raidoBtn =  page.getByRole("link" , {name : "Radio Buttons Demo"});
await raidoBtn.click();
const singeRadio = await page.getByLabel("Female").nth(0);
await singeRadio.click();
const showBtn = await page.getByRole("button" , {name : "Show Selected Value"});
await showBtn.click();
const successRadioBtnMsg = page.locator("#message-one");
await expect(successRadioBtnMsg).toBeVisible();
const msgTxt = await successRadioBtnMsg.textContent(); //get text of the message
console.log(msgTxt);
await expect(msgTxt).toContain("Female");//if female inside mesg content =>pass
await page.pause();
})