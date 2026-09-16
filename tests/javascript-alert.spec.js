import {test,expect} from "@playwright/test"

test("alert-modal-javascript" , async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php");
    const clickMeBtnYellow = page.getByRole("button" , {name : "Click me!"}).last();
    //handle js
    //page.on("dialog",dialog=>dialog.accept()); //accept the dialog box
    //page.on("dialog",dialog=>dialog.dismiss()); //dismiss the dialog box

page.on("dialog",async(dialog)=>{
    await page.waitForTimeout(3000);
    console.log(dialog.message());
    await dialog.dismiss();
})

    await clickMeBtnYellow.click();
    const dialogOut = await page.locator("#confirm-demo").textContent();
    //console.log(await dialogOut.tobevisible());
    await expect(dialogOut).tobevisible();
    await expect(dialogOut).toContain("Cancel");

    await page.pause();

})

