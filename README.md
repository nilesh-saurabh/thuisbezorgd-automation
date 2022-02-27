# Test Assignment Part-1
## CYPRESS-E2E-tests
- E2E testing using cypress

## Requirements/Pre-Requisites
- git(not mandatory at initial step. but this is very useful for CI)
- Javascript
- node.js
- npm
- cypress

## Execution steps to run E2E tests
- Clone this project in your local machine 
- Open the project in the IDE
- Run the following commands to execute the tests in headed mode
  `npm install`
  `npx cypress open`
- Automatically One cypress UI window will open
- Click on place_order.spec.js file
- It will Run place_order tests under that folder

## Execution steps to run E2E tests in headless mode
- Below command is to run tests in headless mode:
  `npm run e2eTests_headless` 

## Test Reports
Execution report can be found under the project and in below format. It generates very good report with all the details if it fails anywhere.
 + HTML format : "cypress\reports\report.html" 
 + JSON format : "cypress\reports\report.json"
- I will attach one report with the email for your reference. 

## Instructions to run on Gitlab
- Navigate to CI/CD and click on "Run Pipeline"

### The project directory structure
The project follows the standard directory structure used in cypress projects:
Thuisbezorgd-Test-Automation
  + cypress
  + integration                         
    + e2e_tests                   place_order
  + plugins                       index
  + reports                       report.html
  + screenshots
  + support

# Test Assignment Part-2
## API Rest Endpoints 
- API Services testing using postman

## Requirements/Pre-Requisites
- Postman Tool
- node.js
- npm
- newman

## Execution steps to run API tests
## Type 1 - Run through Postman tool
- Import the collection and environment file in your postman tool
- Run the collection from the options available from left side menu bar
- Detailed reports are available immediately after the collection run completed

## Type 2 - Run through newman in headless mode
- Open terminal on your local machine
- Check newman is installed or not by running below command
  `newman --version`
- If not please follow to install newman on your local machine using below commands. 
  `npm install newman`
- One newman folder will be generated on your local machine
- Run the below command to run api test in headless mode in terminal. But customise the path according to your folder location before running the command:
  `newman run /........folder location......../JsonPlaceHolder.postman_collection.json -e /............folder location................../JsonPlace_Env.postman_environment.json --reporters cli,htmlextra`

## Test Cases Covered
- Positive and Negative scenarios all are covered in the test suite.  

## Test Reports
- Execution report can be found under the newman folder of your loacl machine in HTML format. It generates very good report with all the details. 
- I will attach one report with the email for your reference.                                