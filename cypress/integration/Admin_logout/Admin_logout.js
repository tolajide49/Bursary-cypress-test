import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import  Admin_login from "../Pages/AdminloginPages";

Given("The Client user is on the home page of Educollect application", () => {
    Admin_login.visitUrl()
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    Admin_login.enterLoginCred(email, password)
});

And("the submit button is clicked", () => {
    Admin_login.clickSubmit()
  });
  
  When(/^client admin waits for (\d+) milliseconds$/, function () {

});

And("client admin logs out", () => {
  //  cy.get('button[class="MuiSvgIcon-root"]').select("Logout", { force: true });

    cy.get('.jss110 > .MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiList-root > .MuiButtonBase-root').click()
});



And(/^Verify that a user is logged out sucessfully$/, function () {
 cy.get('.jss7').should('have.text', 'Forgot password?')
});
