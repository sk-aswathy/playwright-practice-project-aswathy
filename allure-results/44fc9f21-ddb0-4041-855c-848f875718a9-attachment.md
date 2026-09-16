# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datepicker.spec.js >> datepicker
- Location: tests\datepicker.spec.js:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.datepicker-years td').getByText('2031', { exact: true })
    - locator resolved to <span class="year">2031</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | import { asyncWrapProviders } from "node:async_hooks";
  3  | 
  4  | test ("datepicker" , async({page})=>{
  5  |     const month = 4;
  6  |     const year = 2031;
  7  |     const date = 25;
  8  |     const fullDate = date + "/" + month + "/" + year ;
  9  |     console.log(fullDate)
  10 |       page.pause()
  11 |     await page. goto("https://selenium.qabible.in/index.php");
  12 |     const datepickmenu = page.getByRole("link",{name : "Date Pickers"});
  13 |     await datepickmenu.click();
  14 |     const datetextbox = page.locator("#basic-addon1").first();
  15 |     await datetextbox.isVisible();
  16 |         await datetextbox.click();
  17 | 
  18 | //await page.locator(".datepicker-switch").click();
  19 | await page.locator(".datepicker-days th.datepicker-switch").click();
  20 | await page.locator(".datepicker-months th.datepicker-switch").click();
  21 | 
  22 | 
  23 | //checking if the year is in the default(first) selected range. If yes break.
  24 | while(true){
  25 | const yearrange = await page.locator(".datepicker-years th.datepicker-switch").textContent()
  26 | console.log(yearrange)
  27 | const startingrage = yearrange.split('-')[0];
  28 | console.log(startingrage)
  29 | const endingrage = yearrange.split("-")[1]
  30 | console.log(endingrage)
  31 |   page.pause()
  32 | if (year >= startingrage && year<= endingrage)
  33 | {
  34 |     console.log("onside break if")
  35 |     break;
  36 | }
  37 | if (year < startingrage) //verify if year in less than rege or next range
  38 | {
  39 |     //click previous
  40 |      console.log("onside year < startingrage if")
  41 |     const prevBtn =  page.locator(".datepicker-years th.prev");
  42 |     await prevBtn.isVisible();
  43 |     await prevBtn.click();
  44 | }
  45 | else if (year > startingrage){
  46 |          console.log("onside year > startingrage else")
  47 | page.pause()
  48 |     const nextBtn =  page.locator(".datepicker-years th.next");
  49 |     await nextBtn.isVisible();
  50 |     nextBtn.click();
  51 |     page.pause()
  52 | }
  53 | }
  54 |    
  55 |     //await page.getByText(year.toString(),{exact : true}).first().click(); //IF CORRECT OUR STRING
  56 |     console.log("year.toString -" + year.toString)
> 57 |     await page.locator(".datepicker-years td").getByText(year.toString(),{exact:true}).click();
     |                                                                                        ^ Error: locator.click: Target page, context or browser has been closed
  58 |     console.log("after year click")
  59 |     await page.locator(".month").nth(month-1).click();
  60 |     await page.getByText(date.toString(),{exact:true}).first().click();
  61 |     await page.getByRole("button", {name : "Show Date"}).first().click();
  62 | 
  63 |     const DateRetrieved = await page.locator("#message-one").first().textContent();
  64 |     console.log(DateRetrieved)
  65 | 
  66 |     await expect(DateRetrieved).toContain("2031")
  67 |         await page.pause(); 
  68 | 
  69 | })
```