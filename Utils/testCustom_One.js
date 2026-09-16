import {test} from "@playwright/test"

exports.myTest = test.extend({
    userList : async({},use)=>{   //use - custom function is a clean up fn
        await use([
            {
                username : "standard_user",
                password : "secret_sauce"
            } ,
            {
                username : "visual_user",
                password : "secret_sauce"
            }
        ])
    } 
    
})