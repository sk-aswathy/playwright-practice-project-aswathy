import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage.js";
import {ReviewOrderPage} from "../pages/ReviewOrderPage"
import { OrderCreatePage } from "../pages/OrderCreatePage";


export class PageManager{
    constructor(page){
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
