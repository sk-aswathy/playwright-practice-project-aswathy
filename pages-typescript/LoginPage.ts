//typescript -- need to ass type
//if type not known 'Any'

import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page : Page
    userName : Locator
    passWord : Locator
    loginBtn : Locator

constructor(page:Page){
    this.page = page;
    this.userName = page.locator("#user-name");
    this.passWord = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
}

async navgateToURL(){
    await this.page.goto("https://www.saucedemo.com");
}

async validateLogin(){
   
    //login to website
    await this.userName.fill("standard_user");
    await this.passWord.fill("secret_sauce")
    await this.loginBtn.click();
}
    
}