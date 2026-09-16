import { expect } from "@playwright/test";

export class CartPage{
constructor(page){
    this.page=page;
    this.cartItemDesc =  page.locator(".cart_item_label .inventory_item_name")
    this.checkoutButton = page.getByRole("button", {name : "Checkout"});
}

async verifyCartItem(myProduct){
    //verify product
    const newcartItemDesc = await this.cartItemDesc.textContent();
    console.log("cart cartitem is :", newcartItemDesc);
    await expect(newcartItemDesc).toContain(myProduct);
}

async clickCehckout(){
     //click checkout button
    await this.checkoutButton.click();
}

}