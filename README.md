# Testing different scenarios using cypress
What is this project about:<br/><br/>
This project covers various scenario's that come while testing any web application using cypress<br/>
this project uses Cucumber framework to run the tests and the files are managed b Page Object Model<br/>
Allure plugin is used to generate the reports for the tests<br/><br/><br/>
How to setup this project on different machines: <br/>
1) Clone this repository through ``` https://github.com/Aakash-Chatta/Cypress_Test.git ``` <br/>
2) To install all the dependencies type this command in the terminal of the project  ``` npm install``` <br/>
After this you should be ready to run the code on your machine <br/><br/><br/>

How to run the tests:<br/>
To run the test with chrome browser in headless mode with allure report do ``` npm run cy_browser:headless ``` in the project terminal<br/>
To run the test with chrome browser in headed mode with allure report do ``` npm run cy_browser:headed ``` in the project terminal<br/>
To open allure report do ``` npm run cy_report:allure ``` in the project terminal<br/>
To the test in Cypress UI mode do ``` npx cypress open ``` in the project terminal<br/>

