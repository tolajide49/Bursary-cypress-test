import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import  Admin_login from "../Pages/Adminlogin";

Given("The Client user is on the home page of Educollect application", () => {
    Admin_login.visitUrl()
});

When(/^He enters his email as "([^"]*)" and his password as "([^"]*)"$/, function (email, password) {
    Admin_login.input_credentials(email, password)
});

And("the submit button is clicked", ()=> {
    Admin_login.clickSubmit()
    cy.wait(5000)
});

cy.wait(3000);
cy.get('.MuiIconButton-colorInherit > .MuiIconButton-label > .MuiSvgIcon-root').click();
cy.wait(3000);

//Click on the Audit trail
cy.get('input[class="MuiTypography-root jss160 MuiTypography-body1"]').click({force: true});
cy.wait(3000);

Then("assert that a user is able to view recent activities", () => {
    cy.get(('input[class="MuiBox-root jss185"]')).should('contain.text' , 'Created By')
});
