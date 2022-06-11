Feature: Authentication
As an Client user, i should not be abe to login with a invalid email and password
As an Client user, i should be abe to login with a valid email and password


  Scenario: Login with invalid credentials

    Given The Client user is on the home page of Educollect application
    When He enters his email as "presidejncia@becamanus.site" and his password as "Password1@"
    And the submit button is clicked
    And check that login is unsuccessful


  Scenario: Login with valid credentials

    Given The Client user is on the home page of Educollect application
    When He enters his email as "sessizliginresmi@bibliotekadomov.com" and his password as "Password1@"
    And the submit button is clicked
    And check that login is successful


