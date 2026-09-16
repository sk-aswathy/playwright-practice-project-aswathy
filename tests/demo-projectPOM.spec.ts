 import {test,expect} from "@playwright/test"
import { PageManager } from "../pages-typescript/PageManager";
import orderData from "../Utils/orderData.json"

for (const data of orderData)
{
 
 test(`test-on ${data.myProduct}` , async({page})=>{
    const myProduct = "Sauce Labs Onesie";
    const PM = new PageManager(page);
 
    const loginpageobj =  await PM.getLoginPage();
    await loginpageobj.navgateToURL();
    await loginpageobj.validateLogin();
     
    const pordpageobj = await PM.getProductPage();
   await pordpageobj.selectAndAddItemToCArt(myProduct);
    await pordpageobj.goToCart();
    
    const cartobj = await PM.getCartPage();
    await cartobj.verifyCartItem(myProduct);
    await cartobj.clickCehckout();
    
    const checkoutobj = await PM.getCheckoutPage();
    await checkoutobj.fillCheckoutDetails();
    await checkoutobj.continue();
    
    const reviewPAgeobj = await PM.getReviewPage();
    await reviewPAgeobj.clickOnFinish();
   
    const orderCreateobj = await PM.getsuccessPage();
   await orderCreateobj.OrderSuccessVerify();
   
    await page.pause();
})
}
