Feature: Audit_Trail

As a logged in an Admin, I should be able to view Audit trail recent activities
Scenario: Audit trial

Given The Client user is on the home page of Educollect application
When he enters his email as "churchcookies@whaaaaaaaaaat.com" and his password as "P@ssword2"
And the submit button is clicked
Then assert that a user is able to view recent activities
