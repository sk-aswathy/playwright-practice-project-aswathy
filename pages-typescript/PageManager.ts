import { LoginPage } from "../pages-typescript/LoginPage";
import { ProductPage } from "../pages-typescript/ProductPage";
import { CartPage } from "../pages-typescript/CartPage";
import { CheckoutPage } from "../pages-typescript/CheckoutPage";
import {ReviewOrderPage} from "../pages-typescript/ReviewOrderPage"
import { OrderCreatePage } from "../pages-typescript/OrderCreatePage";
import { Page } from "@playwright/test";


export class PageManager{

    page : Page
    loginpageobj : LoginPage
    pordpageobj : ProductPage
    cartobj : CartPage
    checkoutobj : CheckoutPage
    reviewPAgeobj : ReviewOrderPage
    orderCreateobj : OrderCreatePage

    constructor(page: Page){
        this.page=page
        this.loginpageobj = new LoginPage(page);
        this.pordpageobj = new ProductPage(page);
        this.cartobj = new CartPage(page);
        this.checkoutobj = new CheckoutPage(page);
        this.reviewPAgeobj = new ReviewOrderPage(page);
        this.orderCreateobj = new OrderCreatePage(page);
        
    }

    getLoginPage(){
        return this.loginpageobj;
    }

    getProductPage(){
        return this.pordpageobj;
    }

     getCartPage(){
        return this.cartobj;
    }

     getCheckoutPage(){
        return this.checkoutobj;
    }

     getReviewPage(){
        return this.reviewPAgeobj;
    }

     getsuccessPage(){
        return this.orderCreateobj;
    }
}
