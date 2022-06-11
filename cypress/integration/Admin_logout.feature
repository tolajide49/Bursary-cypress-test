Feature: Admin_Logout
As an Admin, i should be able logout successfully

Scenario: Logout as an admin user

Given The Client user is on the home page of Educollect application
When He enters his email as "ololade.oredola@venturegardengroup.com" and his password as "P@ssword01"
And the submit button is clicked
And client admin logs out
And Verify that a user is logged out sucessfully
