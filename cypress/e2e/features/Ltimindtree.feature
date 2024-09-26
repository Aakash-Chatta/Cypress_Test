Feature: To check different scenarios in cypress using cucumber

    Scenario: It should be possible to submit "Reach us" form
        Given User navigates to the Website
        When User clicks on Life Sciences under "Industries"
        Then User clicks on submit button in "Reach us" form
        And User check if error message is shown for mandatory fields
        And User checks if message field is not mandatory
        Then User enters correct information in all the mandatory fields
        Then User selects Denmark from countries dropdown
        And I agree to the Terms and Conditions
        Then User checks if country dropdown has 203 countries

    Scenario: It should be possible for a user to seach for desired text on the site
        Given User navigates to the Website
        When User types "Nordea" in the search box
        Then User should see atleast 2 records
        And User clicks on "LTI posts robust 3.8% QoQ revenue growth in constant currency; Net Profit jumps 6.6% QoQ"
        Then User checks if Mikael Spliid is the nordea contact person and he works as Head of WMO IT Solutions
