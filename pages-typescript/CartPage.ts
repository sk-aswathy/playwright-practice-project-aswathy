import { expect, Locator, Page } from "@playwright/test";

export class CartPage{
    page : Page
    cartItemDesc : Locator
    checkoutButton : Locator

constructor(page:Page){
    this.page=page;
    this.cartItemDesc =  page.locator(".cart_item_label .inventory_item_name")
    this.checkoutButton = page.getByRole("button", {name : "Checkout"});
}

async verifyCartItem(myProduct:String){
    //verify product
    const newcartItemDesc : any = await this.cartItemDesc.textContent();
    console.log("cart cartitem is :", newcartItemDesc);
    await expect(newcartItemDesc).toContain(myProduct);
}

async clickCehckout(){
     //click checkout button
    await this.checkoutButton.click();
}

}