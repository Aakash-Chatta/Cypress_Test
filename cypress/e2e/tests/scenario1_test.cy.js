import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import lti from "../pages/scenario1_page.cy";

Given("User navigates to the Website", () => {
    lti.enterURL();
});
When("User clicks on Life Sciences under \"Industries\"", () => {
    lti.goto_life_science();
});
Then("User clicks on submit button in \"Reach us\" form", () => {
    lti.click_submit();

});
And("User check if error message is shown for mandatory fields", () => {
    lti.verify_mandatory_assertions();
});
Then("User enters correct information in all the mandatory fields", () => {
    lti.enter_info
});
And("User checks if message field is not mandatory", () => {
    lti.check_non_mandatory();
});
And("User checks if country dropdown has 203 countries", () => {
    
});
Then("User selects Denmark from countries dropdown", () => {
    
});
And("I agree to the Terms and Conditions", () => {
    lti.agreeTC();
});