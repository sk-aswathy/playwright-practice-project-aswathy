import test from "@playwright/test"; //import

//create a test
//async - await is of async fn - to synchronise javascipt fn
//
test("First Sample test" , async({browser})=>{ //browser fixture
    const context = await browser.newContext(); //new tab in the browser
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
})