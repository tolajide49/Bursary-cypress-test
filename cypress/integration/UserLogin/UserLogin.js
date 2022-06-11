import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import User_login from "../Pages/UserLogin";

//valid user login
Given("The Client user is on the home page of Educollect application", () => {
    User_login.visitUrl()

    
  
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    User_login.input_credentials(email, password)

});
 
And("the submit button is clicked", () => {
  User_login.clickSubmit()
  cy.wait(5000)
});


And ("check that login is unsuccessful" , () => {
  User_login.errorMessage();
});


And ("check that login is successful" , () => {
  User_login.assertDashboard();
});