export class ReviewOrderPage{
    constructor(page){
        this.page=page;
        this.finimshChkt = page.locator("#finish");
    }

async clickOnFinish(){
      await this.finimshChkt.click();
}
}