import {test,playwright} from "@playwright/test"

// .describe annotation is to note that the tests are grouped
test.describe("grouptest" , ()=>{

//BEFORE EACH - TO RUN BEFORE ALL TEST
test.beforeEach("beforeEachTest" , async({})=>{
console.log("RUN BEFORE EACH TEST")
})

//AFTEREACH - RUN AFTER ALL FN
test.afterEach("afterEachtest", async({})=>{
    console.log("RUN AFTER EACH TEST")

})

//AFTERALL - RUN AFTER ALL FN
test.afterAll("afterAlltest", async({})=>{
    console.log("RUN AFTER ALL TEST")

})

//BEFOREALL - RUN BEFORE ALL FN
test.beforeAll("beforeAlltest", async({})=>{
    console.log("RUN before ALL TEST")

})

test("TestCase_One", async({page})=>{
    console.log("WE ARE RUNNING AN ACTUAL TESTCASE one.....")

})
//annotiation are .only, .skip , .fixme,
test.skip("TestCase_Two", async({page})=>{
    console.log("WE ARE RUNNING AN ACTUAL TESTCASE two.....")

})

test("TestCase_Thtee", async({page})=>{
    test.slow();
    console.log("WE ARE RUNNING AN ACTUAL TESTCASE three.....")

})
//.fixme will be skipped. this is when we know the test is error and need not run
test.fixme("TestCase_Four", async({page})=>{
    console.log("WE ARE RUNNING AN ACTUAL TESTCASE Four.....")

})
})
