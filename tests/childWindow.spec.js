import {test,expect} from "@playwright/test"

test("childWindow" , async({page,context})=>{
    await page.goto("https://selenium.qabible.in/index.php");
    await page.locator("#alert-modal").click();
    await page.locator("//a[@href='window-popup.php']").click();
    console.log("The page title is :: "  + await page.title());

   // await page.getByRole("link",{name : "  Like us On Facebook "}).click();

   //return a child window . as a result of the click new window opens, 
   //to handle this(to sycnc) promose is used 
   const [childPAge] = await Promise.all([
        context.waitForEvent("page"),await page.getByRole("link",{name : "  Like us On Facebook "}).click()
    ])
        await childPAge.waitForLoadState();


    console.log( "The page title is :: "  +await childPAge.title())
    await childPAge.locator("#_r_4_").isVisible();
    //
   // await childPAge.locator("#_r_4_").fill("Aswathy")
    await childPAge.getByText("Email address or phone number").fill("Aswathy")
    //await childPAge.getByRole("input" , {name : "email"}).fill("Aswathy")
    await childPAge.close();
    await page.close();
    await page.pause();
})