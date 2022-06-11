const AdminUrl = "https://gateway.educollectfinance.com/adminlogin"
const emailField = '#email'
const passwordField = '#password'
const loginSubmitBtn = '.MuiButton-label'
const dashboard = '[group="\'dashboard\'"] > .navigation-link'
const errorMessage = '.MuiAlert-message'


class Admin_login{
    static visitUrl() {
        cy.visit(AdminUrl)
    }

    static enterLoginCred (email, password) {
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

        static clickSubmit () {
        cy.get(loginSubmitBtn).click()
    }

    static assertDashboard() {
        cy.get(dashboard).contains("Dashboard")
    }

    static errorMessage() {
        cy.get(errorMessage).contains('username or password incorrect')
    }


} export default Admin_login