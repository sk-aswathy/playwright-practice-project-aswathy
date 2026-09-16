import {test,expect} from "@playwright/test"
import { PageManager } from "../pages/PageManager";
import orderData from "../Utils/orderData.json"
console.log(orderData)
//const data = orderData;

//const data = JSON.parse(JSON.stringify(orderData));  to parse data from json , object
 for (const data of  orderData) //loop through the ARRAY since made data gile array
 {

 test(`test-one ${data.myProduct}` , async({page})=>{
    //const myProduct = "Sauce Labs Onesie";
    const PM = new PageManager(page);
 
    const loginpageobj =  await PM.getLoginPage();
    await loginpageobj.navgateToURL();
    await loginpageobj.validateLogin(data.userName, data.passWord);
     
    const pordpageobj = await PM.getProductPage();
   await pordpageobj.selectAndAddItemToCArt(data.myProduct);
    await pordpageobj.goToCart();
    
    const cartobj = await PM.getCartPage();
    await cartobj.verifyCartItem(data.myProduct);
    await cartobj.clickCehckout();
    
    const checkoutobj = await PM.getCheckoutPage();
    await checkoutobj.fillCheckoutDetails(data.firstname,data.lastNAme,data.zipcode);
    await checkoutobj.continue();
    
    const reviewPAgeobj = await PM.getReviewPage();
    await reviewPAgeobj.clickOnFinish();
   
    const orderCreateobj = await PM.getsuccessPage();
   await orderCreateobj.OrderSuccessVerify();
   
    //await page.pause();

    await page.waitForTimeout(3000)
})
 }
