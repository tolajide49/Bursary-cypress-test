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



And("logs out of the application", () => {
  cy.get('.jss70 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
  cy.get('.MuiPaper-root > .MuiList-root > :nth-child(2)').click()
  cy.wait(6000)
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
 
  And(/^Verify that a user is logged out sucessfully$/, function () {
    cy.get('.jss7').should('have.text', 'Forgot password?')
   });
   
