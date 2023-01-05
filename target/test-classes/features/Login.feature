@Login
Feature: Login Scenarios
  This cases is for Login feature which is every case will started with Background first.

  Background: User launch the AUT
    Given user launch the Sauce Demo app
    Then Sauce Demo app will displayed

  @TC001
  Scenario: TC001 - User login with correct credential
    Given user input username "standard_user"
    And user input password "secret_sauce"
    And user click Login button
    Then user redirected to "PRODUCTS" page

  @TC002
  Scenario Outline: TC002 - User login with incorrect credentials
    Given user input username "<username>"
    And user input password "<password>"
    And user click Login button
    Then warning message appear "<message>"
    Examples:
      | username      | password      | message                                                                     |
      |               |               | Username is required                                                        |
      | standard_user |               | Password is required                                                        |
      |               | secret_sauce  | Username is required                                                        |
      | standarduser  | secretsauce   | Username and password do not match any user in this service.  |