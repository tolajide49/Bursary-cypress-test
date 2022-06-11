Feature: Feedback

As a logged in Admin, i should be able to search for Feedback
  Scenario: search Feedback


    Given The admin is on the loginpage of Educollect application
    When He enters his email as "churchcookies@whaaaaaaaaaat.com" and his password as "P@ssword2"
    And the submit button is clicked
    And client admin waits for 5000 milliseconds
    Then client admin is successfully logged into the application and click on the referrals on dashboard
    Then client admin searches for a keyword
    Then admin can view that the feedback result contains the expected result

    

   
    
   
