import {test,expect} from "@playwright/test"
import { asyncWrapProviders } from "node:async_hooks";

test ("datepicker" , async({page})=>{
    const month = 4;
    const year = 2031;
    const date = 25;
    const fullDate = date + "/" + month + "/" + year ;
    console.log(fullDate)
      page.pause()
    await page. goto("https://selenium.qabible.in/index.php");
    const datepickmenu = page.getByRole("link",{name : "Date Pickers"});
    await datepickmenu.click();
    const datetextbox = page.locator("#basic-addon1").first();
    await datetextbox.isVisible();
        await datetextbox.click();

//await page.locator(".datepicker-switch").click();
await page.locator(".datepicker-days th.datepicker-switch").click();
await page.locator(".datepicker-months th.datepicker-switch").click();


//checking if the year is in the default(first) selected range. If yes break.
while(true){
const yearrange = await page.locator(".datepicker-years th.datepicker-switch").textContent()
console.log(yearrange)
const startingrage = yearrange.split('-')[0];
console.log(startingrage)
const endingrage = yearrange.split("-")[1]
console.log(endingrage)
  page.pause()
if (year >= startingrage && year<= endingrage)
{
    console.log("onside break if")
    break;
}
if (year < startingrage) //verify if year in less than rege or next range
{
    //click previous
     console.log("onside year < startingrage if")
    const prevBtn =  page.locator(".datepicker-years th.prev");
    await prevBtn.isVisible();
    await prevBtn.click();
}
else if (year > startingrage){
         console.log("onside year > startingrage else")
page.pause()
    const nextBtn =  page.locator(".datepicker-years th.next");
    await nextBtn.isVisible();
    nextBtn.click();
    page.pause()
}
}
   
    //await page.getByText(year.toString(),{exact : true}).first().click(); //IF CORRECT OUR STRING
    console.log("year.toString -" + year.toString)
    await page.locator(".datepicker-years td").getByText(year.toString(),{exact:true}).click();
    console.log("after year click")
    await page.locator(".month").nth(month-1).click();
    await page.getByText(date.toString(),{exact:true}).first().click();
    await page.getByRole("button", {name : "Show Date"}).first().click();

    const DateRetrieved = await page.locator("#message-one").first().textContent();
    console.log(DateRetrieved)

    await expect(DateRetrieved).toContain("2031")
        await page.pause(); 

})