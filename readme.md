## Playwright Automation

This project uses Playwright for automation testing. The project is organized into following structure

- pages: This folder contains the Page Object Model files that define the page elements and methods.
- fixtured: This folder contains the test data files that are used in the tests.
- tests: This folder contains the test files that define the test scenarios.
- playwright-config.js: This file contains the configuration settings for Playwright.
- package.json: This file contains the dependencies required for running the tests.

### Setup
Clone the repository to your local machine.

Install the dependencies using the following command:

``` npm install ```

To install playwright browser dependencies:

``` npx playwright install ```

### Test Execution

The tests are located in the tests folder.

Run the tests using the following command:

To run tests in headless mode (faster)

```npm run test```

To execute tests in GUI mode

```npm run test:local```

If there is a problem with parallel execution then you can change the worker numbers inside ```playwright-config.js```

### Test Reports
After running the tests, a report will be generated in the ./test-results folder. The report includes the test results and a summary of the test execution.

To view report you can run the following cmd:

```npx playwright show-report```

Conclusion
This is a basic guide for setting up and running the Playwright tests in this project. If you encounter any issues or have any questions, please contact the project team for assistance.