import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Admin_login from "../Pages/AdminloginPages";

//valid admin login
Given("The client admin is on the home page of Educollect application", () => {
    Admin_login.visitUrl()
  
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    Admin_login.enterLoginCred(email, password)

});
 
And("the submit button is clicked", () => {
  cy.get('.MuiButton-label').click();
});

When(/^client admin waits for (\d+) milliseconds$/, function () {

});

Then(/^client admin should get an error message$/, function () {
    Admin_login.errorMessage()
});

Then("client admin is successfully logged into the application and views dashboard page", () => {
    Admin_login.assertDashboard()

});
