const website = 'http://educollectwebsitetest.azurewebsites.net/user/login/'
const emailField = '#email'
const passwordField = '#password'
const loginSubmission ='.jss36 > .MuiButtonBase-root > .MuiButton-label'
const dashboard = '.jss81 > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiList-root > [aria-current="page"] > .MuiBox-root > .jss76'
const altmessage = '.MuiAlert-message'


class User_login{
static visitUrl () {
//cy.visit(website, { failOnStatusCode: false })

cy.visit(website, {
       // retryOneNetworkFailure: true,
    });
    cy.reload()
    cy.clearCookies({log: true})
    cy.clearLocalStorage({log: true})
}



static input_credentials (email,password) {
cy.get(emailField).type(email)
cy.get(passwordField).type(password)
}

static clickSubmit () {
 cy.get(loginSubmission).click()  
}


 static assertDashboard() {
    cy.get(dashboard).should('contain.text', 'Overview')
}

static errorMessage() {
    cy.get(altmessage).should('contain.text','Login attempt failed, please contact system administrator.')
}


}export default User_login
