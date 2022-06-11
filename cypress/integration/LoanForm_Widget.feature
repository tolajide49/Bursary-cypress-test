Feature: LoanForm_Widget

As a logged in User, i should be able to view the loan form and widget
  Scenario: Loan form and widget intiallization

Given The client user is on the dashboard of educollect
 When He enters his email as "sessizliginresmi@bibliotekadomov.com" and his password as "Password1@"
And the submit button is clicked
Then Click on continue application to view loan form
And view the Sponser information details and proceed
Then view the bank account page and save and continue
And View the Employemnt Information page and save and continue to view the widget
Then assert that a user is able to view the  widget
