export class CheckoutPage{

    constructor(page){
        this.page=page;
        this.form_firstname = page.locator("#first-name");
        this.form_lastname= page.locator("#last-name");
        this.form_postalcode=page.locator("#postal-code");
        this.continueCehckout = page.locator("#continue");
    }

    async fillCheckoutDetails(fName,LName,zip){
        await this.form_firstname.fill(fName);
        await this.form_lastname.fill(LName);
        await this.form_postalcode.fill(zip);
    }

    async continue(){
        await this.continueCehckout.click();
    }
}