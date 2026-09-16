import {test} from "@playwright/test"

exports.customTest = test.extend({                 //extend the test
loginData:{
     username : "standard_user" , 
    passWord : "secret_sauce",
    firstname : "Aswathy",
    lastNAme : "SK",
    zipcode : "695583",
    myProduct : "Sauce Labs Onesie"
},
invalidloginData:{
     username : "standard_user_new" , 
    passWord : "secret_sauce",
    firstname : "Aswathy",
    lastNAme : "SK",
    zipcode : "695583",
    myProduct : "Sauce Labs Onesie"
}
})