import {test,except} from "@playwright/test"

test ("iframeTest" , async({page})=>
{
await page.goto("https://demoqa.com/frames");
const iFrame =  page.frameLocator("#frame1")   //framelocator
const iFrameText = await iFrame.locator("#sampleHeading").textContent();
console.log(iFrameText);
await page.waitForTimeout(3000);



})

test ("dragandDrop" , async({page})=>{
await page.goto("https://selenium.qabible.in/drag-drop.php")
const fromProsition =  page.locator("#todrag")
const eachFromPosition =  fromProsition.locator('span[draggable="true"]')
const count = await eachFromPosition.count();
console.log("count is " , count)
const endingPoint = page.locator("#mydropzone")

for (let i=0;i<count;i++){

  console.log("count dragged " , i)
    console.log("locator to be dragged " , eachFromPosition.nth(i))
    const current = await eachFromPosition.nth(i).textContent();
    console.log("data to be dragged " , current)
    await eachFromPosition.nth(0).dragTo(endingPoint) //when one item dragged away, the second one moved to 0th position
    await page.waitForTimeout(2000);
}

//await fromProsition.locator("//span").nth(1)
//await fromProsition.dragTo(endingPoint)
await page.waitForTimeout(3000);
}
)

