import {test,expect} from "@playwright/test"

test ("screenshot" , async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php");
    await page.screenshot({path : "home.png"}) //page screenshot

  //  const inputForm = page.
})

/*
import {expect,test} from "@playwright/test"
test.only("screenshot",async({page})=>
{
await page.goto("http://selenium.qabible.in/index.php")
//screenshot.......
await page.screenshot({path:"screen1.png"}) //png file name //page screenhsot
//const inputForm =page.getByRole("link",{name:"Input Form"})// locator screenshot
//await inputForm.screenshot({path:"inputform.png"}) // save this path..
//await page.pause()
}
)
*/

//visual comparison - compare a ss existing and SS
//test.only("visualcomparison",async({page})=>{ //to run only this
test("visualcomparison",async({page})=>{
        await page.goto("https://selenium.qabible.in/index.php");
        //await expect("demo1.png").toMatchSnapshot(); //pass only match with demo.png available
                    ///..if demo.png not avaialnble, fail
         await expect(await page.screenshot()).toMatchSnapshot();  //first time fail due to file not available
                                            //   second time compae with first time run image

})