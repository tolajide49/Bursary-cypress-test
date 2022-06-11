import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import {randomMail} from "../commons/commons"
Given(/^user visits the website$/, function () {
    cy.visit("https://www.bursery.com/", {
        retryOneNetworkFailure: true,
    });
    cy.reload()
    cy.clearCookies({ log: true })
    cy.clearLocalStorage({ log: true })

});
When(/^USER clicks on the the sign in button$/, function () {
    cy.get('.jss155 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
});

When(/^User clicks on  sign up$/, function () {
    cy.contains('sign Up').click()

});
Then(/^Fills the sign up form with valid details$/, function () {

    cy.wait(3000)
    // Input First name
    cy.get('#firstName').type("test")

    // Input Last name
    cy.get('#lastName').type("islegit")

    var email = randomMail()
    // Enter Emial Address
    cy.get('#email').type(email)

    //Enter email address
    cy.get('#phoneNumber').type("09034342323")

    //Enter Password
    cy.get('#password1').type("Password1@")

    //Comfirm Password
    cy.get('#password2').type("Password1@")

    cy.wait(4000)
    // Check terms and condition
    cy.get('input[type="checkbox"]').check()
    //OR
    //cy.get('[type="checkbox"]').check()


    // Recapcha

    Cypress.Commands.add('confirmCaptcha', function () {
        cy.get('iframe')
          .first()
          .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
          })
      })
cy.confirmCaptcha()


});

And(/^Clicks on the submit button$/, function () {
    cy.get('.btn').click({ force: true })
    cy.wait(4000)

});
Then(/^User will see a pop up message stating that the email already exists$/, function () {
    cy.get('.toast-error').should("contain.text", 'kenee@yopmail.com already exist')

});




