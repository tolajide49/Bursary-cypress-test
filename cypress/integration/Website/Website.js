import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { randomMail } from "../commons/commons"

const url = "http://educollectwebsitetest.azurewebsites.net/"
Given("User visits the website", () => {
    cy.visit(url)
    cy.get('body').should('contain.text', 'Contact Us')

    cy.get('#rcc-confirm-button').contains('Accept').click({force: true})

})



//Check that the about us page is visible
And("The About page is accessible", () => {
    cy.get('[href="/about-us"]').click()
    cy.get('body').should('contain.text', 'Business Lead');
    cy.wait(5000);
    cy.go(-1)
    
});

//Partners page
When("Validate the partners page", () => {
    cy.get('.MuiBox-root > [href="/partner"]').first().click()
    cy.get('body').should('contain.text', 'Indicate Interest');
    cy.wait(4000);
    cy.go(-1)
});


//Contact us form
When("Validate a user can create form", () => {
    cy.get('#rcc-confirm-button').contains('Accept').click({force: true})
    cy.get('[href="/contact"]').click()
    // Input full name
    cy.get('#name').type("Test is legit")

    //Input company name
    cy.get('#company').type("Test is legit")

    //Phone number
    cy.get('#phoneNumber').type("07035046768")

    var email = randomMail()
    //Work email
    cy.get('#email').type(email)

    //message
    cy.get('#message').type("Test is legit")

    //click on the submit button
    cy.get(".jss574 > .MuiButtonBase-root > .MuiButton-label").click();
    cy.wait(4000);
    cy.get('.MuiAlert-message').should('contain.text', 'Thank you, message sent successfully');

});

