import {Given,When, Then, And } from "cypress-cucumber-preprocessor/steps";
import User_login, {User_Login} from "../Pages/UserLogin";

 Given("The client user is on the dashboard of educollect",()=> {
 User_login.visitUrl()
 });

 When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    User_login.input_credentials(email, password)

});
 
And("the submit button is clicked", () => {
  User_login.clickSubmit()
  cy.wait(5000)
});

Then('Click on continue application to view loan form', ()=> {
cy.get(':nth-child(2) > .MuiBox-root > a > .MuiButtonBase-root > .MuiButton-label').click()
cy.wait(3000)
//Scroll down the page
cy.scrollTo(0, 500)
cy.get('.MuiButton-contained > .MuiButton-label').click()
cy.wait(3000)
})


And('view the Sponser information details and proceed', ()=> {
    cy.get('.MuiButton-contained > .MuiButton-label').click()
    cy.wait(3000)
})


And('view the bank account page and save and continue', ()=> {
    cy.get('.MuiButton-contained > .MuiButton-label').click()
    cy.wait(3000)
})


And('View the Employemnt Information page and save and continue to view the widget', ()=> {
    cy.get('input[id="employment.salaryAmount"]').type('40000', {force: true})


    cy.get('.MuiButton-contained > .MuiButton-label').click()
    cy.wait(3000)
 
})

Then("assert that a user is able to view the  widget", () => {
    cy.get('.advancly-widget').should('contain.text' , 'KYC Information')
});