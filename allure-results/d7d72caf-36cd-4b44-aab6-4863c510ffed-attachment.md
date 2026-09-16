# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot.spec.js >> visualcomparison
- Location: tests\screenshot.spec.js:26:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  8920 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link [ref=e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=e9]
    - navigation [ref=e14]:
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e19]:
          - link "Input Form" [ref=e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e21]:
          - link "Date Pickers" [ref=e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e23]:
          - link "Table" [ref=e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=e25]:
          - link "Progress Bars" [ref=e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=e27]:
          - link "Alerts and Modals" [ref=e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e29]:
          - link "List Box" [ref=e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=e31]:
          - link "Others" [ref=e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=e37]:
    - list [ref=e38]:
      - listitem [ref=e39] [cursor=pointer]
      - listitem [ref=e40] [cursor=pointer]
      - listitem [ref=e41] [cursor=pointer]
      - listitem [ref=e42] [cursor=pointer]
    - generic [ref=e44]:
      - img "Bootstrap 4 slider with text animation" [ref=e45]
      - generic [ref=e46]:
        - heading "Free Download" [level=3] [ref=e47]
        - heading "Bootstrap 4 slider with text animation" [level=3] [ref=e48]
    - button "Previous" [ref=e49] [cursor=pointer]
    - button "Next" [ref=e52] [cursor=pointer]
  - contentinfo [ref=e55]:
    - paragraph [ref=e58]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test ("screenshot" , async({page})=>{
  4  |     await page.goto("https://selenium.qabible.in/index.php");
  5  |     await page.screenshot({path : "home.png"}) //page screenshot
  6  | 
  7  |   //  const inputForm = page.
  8  | })
  9  | 
  10 | /*
  11 | import {expect,test} from "@playwright/test"
  12 | test.only("screenshot",async({page})=>
  13 | {
  14 | await page.goto("http://selenium.qabible.in/index.php")
  15 | //screenshot.......
  16 | await page.screenshot({path:"screen1.png"}) //png file name //page screenhsot
  17 | //const inputForm =page.getByRole("link",{name:"Input Form"})// locator screenshot
  18 | //await inputForm.screenshot({path:"inputform.png"}) // save this path..
  19 | //await page.pause()
  20 | }
  21 | )
  22 | */
  23 | 
  24 | //visual comparison - compare a ss existing and SS
  25 | //test.only("visualcomparison",async({page})=>{ //to run only this
  26 | test("visualcomparison",async({page})=>{
  27 |         await page.goto("https://selenium.qabible.in/index.php");
  28 |         //await expect("demo1.png").toMatchSnapshot(); //pass only match with demo.png available
  29 |                     ///..if demo.png not avaialnble, fail
> 30 |          await expect(await page.screenshot()).toMatchSnapshot();  //first time fail due to file not available
     |                                                ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  31 |                                             //   second time compae with first time run image
  32 | 
  33 | })
```