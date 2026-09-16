import { Locator, Page } from "@playwright/test";

export class CheckoutPage{

page : Page
form_firstname : Locator
form_lastname : Locator
form_postalcode : Locator
continueCehckout : Locator

    constructor(page:Page){
         this.page=page;
        this.form_firstname = page.locator("#first-name");
        this.form_lastname= page.locator("#last-name");
        this.form_postalcode=page.locator("#postal-code");
        this.continueCehckout = page.locator("#continue");
    }

    async fillCheckoutDetails(){
        await this.form_firstname.fill("Aswathy");
        await this.form_lastname.fill("SK");
        await this.form_postalcode.fill("695583");
    }

    async continue(){
        await this.continueCehckout.click();
    }
}