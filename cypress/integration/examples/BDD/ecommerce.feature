Feature: E2E ecommerce validation
        Application regression
        @Regression
        Scenario: Ecommerce products delivery
        Given I open ecommerce page
        When I add items to cart
        And Validate the total prices
        Then select the country submit and verify Thankyou

        @Smoke
        Scenario: Fill teh form for Shop
        Given I open ecommerce page
        When I fill the form details
            |name |gender |
            |Bobz  |Male  |

        Then Validate the form behaviour and select Shop
