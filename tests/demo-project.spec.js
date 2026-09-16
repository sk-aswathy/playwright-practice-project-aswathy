 import {test,expect} from "@playwright/test"
 import {customTest} from  "../Utils/testCustom"
 import {myTest} from "../Utils/testCustom_One"

 test.skip("test-one" , async({page})=>{
    await page.goto("https://www.saucedemo.com");

    const userName = page.locator("#user-name");
    const passWord = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    const prodtTitle = page.locator(".inventory_item_name");
    const myProduct = "Sauce Labs Onesie";
    const cartBtn = page.getByRole("button" , {name : "Add to cart"});
    const miniCartIcon = page.locator(".shopping_cart_link");
    const cartItemDesc =  page.locator(".cart_item_label .inventory_item_name")
    const checkoutButton = page.getByRole("button", {name : "Checkout"});
    const form_firstname = page.locator("#first-name");
    const form_lastname= page.locator("#last-name");
    const form_postalcode=page.locator("#postal-code");
    const continueCehckout = page.locator("#continue");
    const finimshChkt = page.locator("#finish");
    const orderconfirm = page.locator(".complete-header");

    //login to website
    await userName.fill("standard_user");
    await passWord.fill("secret_sauce")
    await loginBtn.click();

    //list prodcuts
    const titles = await prodtTitle.allTextContents();
    console.log(titles);
    

    //to loopp through [roducts and add to cart myProduct]
    const count = await prodtTitle.count();
    console.log("count of items are :" , count);
    const invDesc = await page.locator(".inventory_item_description");//parent div

    for (let i=0; i<count ; i++)
    {
        if(await invDesc.locator(".inventory_item_name").nth(i).textContent() === myProduct)
        {
            console.log(await invDesc.locator(".inventory_item_name").nth(i).textContent());
            await cartBtn.nth(i).click();
        }
    }

    //navigatet to cart
    await miniCartIcon.click();
    
    //verify product
    const newcartItemDesc = await cartItemDesc.textContent();
    console.log("cart cartitem is :", newcartItemDesc);
    await expect(newcartItemDesc).toContain(myProduct);

    //click checkout button
    await checkoutButton.click();
    await form_firstname.fill("Aswathy");
    await form_lastname.fill("SK");
    await form_postalcode.fill("695583");
    
    await continueCehckout.click();
    await finimshChkt.click();
    const success = await orderconfirm.textContent();
    console.log(success);
    await expect(success).toContain("Thank you")

    await page.pause();
});



customTest.skip("test-one-custom" , async({page,loginData})=>{
    await page.goto("https://www.saucedemo.com");

    const userName = page.locator("#user-name");
    const passWord = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    
    //login to website
    await userName.fill(loginData.userName);
    await passWord.fill(loginData.passWord);
    await loginBtn.click();
}
)


/*
customTest.skip(`test-one-custom-loop ${i}` , async({page,loginData})=>{
    await page.goto("https://www.saucedemo.com");
    const currentUSer = loginData[i]
    const userName = page.locator("#user-name");
    const passWord = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    
    //login to website
    await userName.fill(currentUSer.username);
    await passWord.fill(currentUSer.passWord);
    await loginBtn.click();
}
)
*/

myTest(`Mytest_loop` , async({page,userList})=>{

    for(const user of userList){

    await page.goto("https://www.saucedemo.com");
    const userName = page.locator("#user-name");
    const passWord = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    
    //login to website
    await userName.fill(user.username);
    await passWord.fill(user.password);
    await loginBtn.click();
}}
)