export class LoginPage{
constructor(page){
    this.page=page;
    this.userName = page.locator("#user-name");
    this.passWord = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
}

async navgateToURL(){
    await this.page.goto("https://www.saucedemo.com");
}

async validateLogin(userName,password){
   
    //login to website
    await this.userName.fill(userName);
    await this.passWord.fill(password)
    await this.loginBtn.click();
}
    
}