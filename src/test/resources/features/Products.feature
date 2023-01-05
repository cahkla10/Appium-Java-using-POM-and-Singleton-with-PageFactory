@Product
Feature: Product Scenarios
  This cases is for Product feature which is every case will started with Background first.

  Background: User already login
    Given user launch the Sauce Demo app
    Then Sauce Demo app will displayed
    When user input username "standard_user"
    And user input password "secret_sauce"
    And user click Login button
    Then user redirected to Product page

  @TC003
  Scenario Outline: TC003 - User want to sort products
    When user click sort drop down
    And  user select sort "<sort>"
    Then product will be sorted "<desc>"
    Examples:
      |sort|desc|
      |  az  | A to Z   |
      |  za  | Z to A   |
      |  lohi  | Price Low to High   |
      |  hilo  | Price High to Low   |