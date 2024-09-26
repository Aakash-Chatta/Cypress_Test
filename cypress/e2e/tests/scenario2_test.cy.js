import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ltim from "../pages/scenario2_page.cy";

When("User types \"Nordea\" in the search box", () => {
    ltim.search_text();
});
Then("User should see atleast 2 records", () => {
    ltim.check_result();
});
And("User clicks on \"LTI posts robust 3.8% QoQ revenue growth in constant currency; Net Profit jumps 6.6% QoQ\"", () => {
    ltim.click_result();
});
Then("User checks if Mikael Spliid is the nordea contact person and he works as Head of WMO IT Solutions", () => {
    ltim.get_person();
});