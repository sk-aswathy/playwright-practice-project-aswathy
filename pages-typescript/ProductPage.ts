import { Locator, Page } from "@playwright/test";

export class ProductPage{

    page : Page
    prodtTitle : Locator
    cartBtn : any
    miniCartIcon : Locator
    invDesc : Locator

    constructor(page:Page){
        this.page=page;
        this.prodtTitle = page.locator(".inventory_item_name");
        this.cartBtn = page.getByRole("button" , {name : "Add to cart"});
        this.miniCartIcon = page.locator(".shopping_cart_link");
        this.invDesc =  page.locator(".inventory_item_description")
            
}



async selectAndAddItemToCArt(myProduct : String){
     //list prodcuts
    const titles : String[] = await this.prodtTitle.allTextContents();
    console.log(titles);

    //to loopp through [roducts and add to cart myProduct]
        const count : number = await this.prodtTitle.count();
        console.log("count of items are :" , count);
    
        for (let i=0; i<count ; i++)
        {
            if(await this.invDesc.locator(".inventory_item_name").nth(i).textContent() === myProduct)
            {
                console.log(await this.invDesc.locator(".inventory_item_name").nth(i).textContent());
                await this.cartBtn.nth(i).click();
            }
        }
    
       
}

async goToCart(){
     //navigatet to cart
        await this.miniCartIcon.click();
}


}