 import {test,expect} from "@playwright/test"
 
 test("alert-test", async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const alertMenu = page.locator("#alert-modal");
    await alertMenu.click();
    const bootStrapModal = page.getByRole("link", {name:"Bootstrap Modal"});
    await bootStrapModal.click();
    const launchButton1 = page.locator(".btn.btn-primary").first(); //has 2 class, speereted by 
                                            //space"btn btn-primary" becomes .btn.btn-primary
    await  launchButton1.click();

    const modal = page.locator("#exampleModalCenter");
    await expect(modal).toBeVisible();
    await modal.getByRole("button",{name: "Save changes"}).click();//locatior chaining to get locator insid emodal
    await page.pause();

 })   