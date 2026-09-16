import { expect, Locator, Page } from "@playwright/test";

export class OrderCreatePage{

    page : Page
    orderconfirm : Locator
    constructor(page:Page){
        this.page=page;
         this.orderconfirm = page.locator(".complete-header");
    }

async OrderSuccessVerify(){
    const success : any = await this.orderconfirm.textContent();
    console.log(success);
    await expect(success).toContain("Thank you")
}

}