import {test,expect} from "@playwright/test"

test ("@web dropdown-test", async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php");
    const InputForm = await page.getByRole("link", {name:"Input Form"})
    await InputForm.click();
    const dropdownMenu = await page.getByRole("link", {name:"Select Input"})
    await dropdownMenu.click();
    const selectColorDropdown = await page.locator("#single-input-field");
    await selectColorDropdown.selectOption("Red");
    //const selectedDpdwnTEst = page.locator("#message-one");
    const msg = await page.locator("#message-one").textContent();
    console.log(msg);
    await expect(msg).toContain("Red");
    await page.pause();
    })


