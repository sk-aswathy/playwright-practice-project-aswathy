# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-project.spec.js >> test-one-custom-loop invalidloginData
- Location: tests\demo-project.spec.js:89:11

# Error details

```
TypeError: Cannot read properties of undefined (reading 'username')
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1   |  import {test,expect} from "@playwright/test"
  2   |  import {customTest} from  "../Utils/testCustom"
  3   | 
  4   |  test.skip("test-one" , async({page})=>{
  5   |     await page.goto("https://www.saucedemo.com");
  6   | 
  7   |     const userName = page.locator("#user-name");
  8   |     const passWord = page.locator("#password");
  9   |     const loginBtn = page.locator("#login-button");
  10  |     const prodtTitle = page.locator(".inventory_item_name");
  11  |     const myProduct = "Sauce Labs Onesie";
  12  |     const cartBtn = page.getByRole("button" , {name : "Add to cart"});
  13  |     const miniCartIcon = page.locator(".shopping_cart_link");
  14  |     const cartItemDesc =  page.locator(".cart_item_label .inventory_item_name")
  15  |     const checkoutButton = page.getByRole("button", {name : "Checkout"});
  16  |     const form_firstname = page.locator("#first-name");
  17  |     const form_lastname= page.locator("#last-name");
  18  |     const form_postalcode=page.locator("#postal-code");
  19  |     const continueCehckout = page.locator("#continue");
  20  |     const finimshChkt = page.locator("#finish");
  21  |     const orderconfirm = page.locator(".complete-header");
  22  | 
  23  |     //login to website
  24  |     await userName.fill("standard_user");
  25  |     await passWord.fill("secret_sauce")
  26  |     await loginBtn.click();
  27  | 
  28  |     //list prodcuts
  29  |     const titles = await prodtTitle.allTextContents();
  30  |     console.log(titles);
  31  |     
  32  | 
  33  |     //to loopp through [roducts and add to cart myProduct]
  34  |     const count = await prodtTitle.count();
  35  |     console.log("count of items are :" , count);
  36  |     const invDesc = await page.locator(".inventory_item_description");//parent div
  37  | 
  38  |     for (let i=0; i<count ; i++)
  39  |     {
  40  |         if(await invDesc.locator(".inventory_item_name").nth(i).textContent() === myProduct)
  41  |         {
  42  |             console.log(await invDesc.locator(".inventory_item_name").nth(i).textContent());
  43  |             await cartBtn.nth(i).click();
  44  |         }
  45  |     }
  46  | 
  47  |     //navigatet to cart
  48  |     await miniCartIcon.click();
  49  |     
  50  |     //verify product
  51  |     const newcartItemDesc = await cartItemDesc.textContent();
  52  |     console.log("cart cartitem is :", newcartItemDesc);
  53  |     await expect(newcartItemDesc).toContain(myProduct);
  54  | 
  55  |     //click checkout button
  56  |     await checkoutButton.click();
  57  |     await form_firstname.fill("Aswathy");
  58  |     await form_lastname.fill("SK");
  59  |     await form_postalcode.fill("695583");
  60  |     
  61  |     await continueCehckout.click();
  62  |     await finimshChkt.click();
  63  |     const success = await orderconfirm.textContent();
  64  |     console.log(success);
  65  |     await expect(success).toContain("Thank you")
  66  | 
  67  |     await page.pause();
  68  | });
  69  | 
  70  | 
  71  | 
  72  | customTest.skip("test-one-custom" , async({page,loginData})=>{
  73  |     await page.goto("https://www.saucedemo.com");
  74  | 
  75  |     const userName = page.locator("#user-name");
  76  |     const passWord = page.locator("#password");
  77  |     const loginBtn = page.locator("#login-button");
  78  |     
  79  |     //login to website
  80  |     await userName.fill(loginData.userName);
  81  |     await passWord.fill(loginData.passWord);
  82  |     await loginBtn.click();
  83  | }
  84  | )
  85  | 
  86  | const y = ["loginData" , 'invalidloginData']
  87  | for (let i of y) {
  88  | 
  89  | customTest(`test-one-custom-loop ${i}` , async({page,loginData})=>{
  90  |     await page.goto("https://www.saucedemo.com");
  91  |     const currentUSer = loginData[i]
  92  |     const userName = page.locator("#user-name");
  93  |     const passWord = page.locator("#password");
  94  |     const loginBtn = page.locator("#login-button");
  95  |     
  96  |     //login to website
> 97  |     await userName.fill(currentUSer.username);
      |                                     ^ TypeError: Cannot read properties of undefined (reading 'username')
  98  |     await passWord.fill(currentUSer.passWord);
  99  |     await loginBtn.click();
  100 | }
  101 | )}
```