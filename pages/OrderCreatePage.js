import { expect } from "@playwright/test";

export class OrderCreatePage{
    constructor(page){
        this.page=page;
         this.orderconfirm = page.locator(".complete-header");
    }

async OrderSuccessVerify(){
    const success = await this.orderconfirm.textContent();
    console.log(success);
    await expect(success).toContain("Thank you")
}

}