# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: javascript-alert.spec.js >> alert-modal-javascript
- Location: tests\javascript-alert.spec.js:3:5

# Error details

```
TypeError: (0 , _test.expect)(...).tobevisible is not a function
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e35]:
    - generic [ref=e38]:
      - generic [ref=e39]: Menu
      - list [ref=e40]:
        - listitem [ref=e41]:
          - link "Bootstrap Alert" [ref=e42] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e43]:
          - link "Bootstrap Modal" [ref=e44] [cursor=pointer]:
            - /url: bootstrap-modal.php
        - listitem [ref=e45]:
          - link "Window Popup" [ref=e46] [cursor=pointer]:
            - /url: window-popup.php
        - listitem [ref=e47]:
          - link "Progress Bar Modal" [ref=e48] [cursor=pointer]:
            - /url: bootstrap-modal-progress.php
        - listitem [ref=e49]:
          - link "Javascript Alert" [ref=e50] [cursor=pointer]:
            - /url: javascript-alert.php
        - listitem [ref=e51]:
          - link "File Download" [ref=e52] [cursor=pointer]:
            - /url: file-download.php
    - generic [ref=e53]:
      - generic [ref=e55]:
        - generic [ref=e56]: Java Script Alert Box
        - generic [ref=e57]:
          - paragraph [ref=e58]: When an alert box pops up, user have to click "OK" button to proceed.
          - paragraph [ref=e59]: "Click the button to display an alert box:"
          - button "Click me!" [ref=e60] [cursor=pointer]
      - generic [ref=e62]:
        - generic [ref=e63]: Java Script Confirm Box
        - generic [ref=e64]:
          - paragraph [ref=e65]: When a confirm box pops up, user can click "OK" or "Cancel" to proceed.
          - paragraph [ref=e66]: Box returns true, if the user clicks "OK" and box returns false if user clicks "Cancel"
          - paragraph [ref=e67]: Click the button to display an confirm box
          - paragraph [ref=e68]:
            - button "Click me!" [active] [ref=e69] [cursor=pointer]
          - paragraph [ref=e70]: You pressed Cancel!
      - generic [ref=e72]:
        - generic [ref=e73]: Java Script Alert Box
        - generic [ref=e74]:
          - paragraph [ref=e75]: When a prompt box pops up, user can click "OK" or "Cancel" to proceed
          - paragraph [ref=e76]: If the user clicks "OK" after entering the input value, it will return value as Output. If the user clicks "Cancel" the box returns nothing.
          - paragraph [ref=e77]: Click below button for prompt box.
          - button "Click for Prompt Box" [ref=e78] [cursor=pointer]
          - paragraph [ref=e79]
  - contentinfo [ref=e80]:
    - paragraph [ref=e83]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | test("alert-modal-javascript" , async({page})=>{
  4  |     await page.goto("https://selenium.qabible.in/javascript-alert.php");
  5  |     const clickMeBtnYellow = page.getByRole("button" , {name : "Click me!"}).last();
  6  |     //handle js
  7  |     //page.on("dialog",dialog=>dialog.accept()); //accept the dialog box
  8  |     //page.on("dialog",dialog=>dialog.dismiss()); //dismiss the dialog box
  9  | 
  10 | page.on("dialog",async(dialog)=>{
  11 |     await page.waitForTimeout(3000);
  12 |     console.log(dialog.message());
  13 |     await dialog.dismiss();
  14 | })
  15 | 
  16 |     await clickMeBtnYellow.click();
  17 |     const dialogOut = await page.locator("#confirm-demo").textContent();
  18 |     //console.log(await dialogOut.tobevisible());
> 19 |     await expect(dialogOut).tobevisible();
     |                             ^ TypeError: (0 , _test.expect)(...).tobevisible is not a function
  20 |     await expect(dialogOut).toContain("Cancel");
  21 | 
  22 |     await page.pause();
  23 | 
  24 | })
```