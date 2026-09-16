import { Locator, Page } from "@playwright/test";

export class ReviewOrderPage{
    
    page : Page
    finimshChkt : Locator
    
    constructor(page:Page){
        this.page=page;
        this.finimshChkt = page.locator("#finish");
    }

async clickOnFinish(){
      await this.finimshChkt.click();
}
}