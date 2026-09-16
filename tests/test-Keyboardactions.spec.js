import {test,except} from "@playwright/test"

test ("testKeyboardAction", async({page})=>{
await page.goto("https://selenium.qabible.in/simple-form-demo.php")

const os = process.platform=== "darwin" ? "Meta" : "Control" //to find our  OS

const inputBoxA = page.locator("#value-a");
const inputBoxB = page.locator("#value-b");
const addBtn = page.locator("#button-two");
await inputBoxA.focus();
await page.keyboard.type("3")
///TO COPY TEST
await page.keyboard.press(`${os}+A`) //"Meta+A" for MAC Control+A
await page.keyboard.press(`${os}+C`)
await inputBoxB.focus()
await page.keyboard.press(`Control+V`)
await addBtn.focus()
await page.keyboard.press("Enter") //enter



await page.waitForTimeout(3000);


})