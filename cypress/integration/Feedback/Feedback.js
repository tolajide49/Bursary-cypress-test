import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("The admin is on the loginpage of Educollect application", () => {
    cy.visit("https://educollect.test.vggdev.com/adminlogin", {
        retryOneNetworkFailure: true,
    });
    cy.reload()
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
});
When(
    'He enters his email as "churchcookies@whaaaaaaaaaat.com" and his password as "P@ssword2"',
    () => {
        cy.get('#email').type("churchcookies@whaaaaaaaaaat.com");
        cy.get('#password').type("P@ssword2");
    }
);

And("the submit button is clicked", () => {
    cy.get('.MuiButton-label').click();
});
And("client admin waits for 5000 milliseconds", () => {
    cy.wait(5000);
});

Then("client admin is successfully logged into the application and click on the referrals on dashboard", () => {
 cy.get ('.MuiIconButton-colorInherit > .MuiIconButton-label > .MuiSvgIcon-root > path');
 
 cy.wait(3000);
   cy.get('.MuiIconButton-colorInherit > .MuiIconButton-label > .MuiSvgIcon-root').click();
   cy.wait(3000);

       //click on feedback
    cy.get('.jss168 > .jss153 > .MuiListItem-root > .jss161').click({force: true});
    cy.wait(3000)
    
});

Then("client admin searches for a keyword", () => {
    cy.get ('.MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type('Mercedes91@gmail.com').click();
    
   });

   Then("admin can view that the feedback result contains the expected result", () => {
       cy.get('.jss190 > .MuiPaper-root').should('contain.text', 'Mercedes91@gmail.com')
   });
   