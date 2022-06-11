Feature: Signup
As a Client user, i should be able to sign up successfully with valid credentials

Scenario: Sign up with valid credentials

Given user visits the website
When USER clicks on the the sign in button
When User clicks on  sign up
Then Fills the sign up form with valid details
And Clicks on the submit button