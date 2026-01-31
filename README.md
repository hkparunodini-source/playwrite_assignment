# Playwright Assignment - Singlish to Sinhala Translation Tests

This repository contains a comprehensive Playwright test suite for validating the Singlish to Sinhala translation functionality.

## Project Overview

- **Project Name:** it22256850
- **Testing Framework:** Playwright (v1.58.1)
- **Purpose:** Automated testing of Singlish to Sinhala translation features
- **Application Under Test:** [Swift Translator](https://www.swifttranslator.com/) - Singlish to Sinhala/Tamil transliteration
- **Test Directory:** `./tests`
- **Report Directory:** `./playwright-report`
- **Total Tests:** 35 test cases
  - 24 Positive Functional Tests
  - 10 Negative Functional Tests
  - 1 UI Functionality Test

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository) - [Download Git](https://git-scm.com/)

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd playwrite_assignment
```

### Step 2: Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This will install:
- `@playwright/test@^1.58.1` - The Playwright testing framework
- `@types/node@^25.1.0` - TypeScript type definitions for Node.js

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

This command downloads and installs the necessary browser binaries (Chromium, Firefox, WebKit).

## Running Tests

### Run All Tests

Execute all test files:

```bash
npx playwright test
```

### Run Tests in Headed Mode

View test execution in real-time (opens browser window):

```bash
npx playwright test --headed
```

### Run Specific Test File

Run tests from a specific test file:

```bash
npx playwright test tests/Tests.spec.ts
```

### Run Tests with Specific Browser

Run tests using a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests in Debug Mode

Launch the Playwright Inspector for interactive debugging:

```bash
npx playwright test --debug
```

### Run Tests with UI Mode

Open the interactive test runner UI:

```bash
npx playwright test --ui
```

## Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The detailed test results are generated in the `./playwright-report` directory.

## Project Structure

```
playwrite_assignment/
├── tests/
│   └── Tests.spec.ts          # Main test specifications
├── playwright.config.ts        # Playwright configuration file
├── package.json               # Project dependencies and scripts
├── playwright-report/         # Generated HTML test reports
├── test-results/              # Test result artifacts
└── README.md                  # This file
```

## Test Cases Overview

### Positive Functional Tests (24 tests)
Validate correct transliteration of various Singlish input patterns:
- **Grammar & Tenses:** Present, past, future, conditional statements
- **Real-world Scenarios:** Greetings, conversations, office reminders, travel plans, cooking instructions
- **Edge Cases:** Line breaks, repeated words, measurements, long paragraphs, colloquial phrases
- **Additional Tests:** Simple greetings, politeness markers, various tenses

### Negative Functional Tests (10 tests)
Verify handling of unsupported or problematic inputs:
- Chat shorthand (e.g., "thx", "lol")
- Mixed case inputs
- English abbreviations and acronyms
- Rare English loanwords
- Compound word segmentation issues
- Special characters
- Multiple negation markers
- Price negotiations and voice command styles

### UI Tests (1 test)
- Clear button functionality verification

## Test Results

Test results and screenshots are stored in:
- **HTML Reports:** `./playwright-report/index.html`
- **Test Results:** `./test-results/` (contains detailed results by test case)
- **Total Test Artifacts:** 765 files generated from test runs

## Configuration

The Playwright configuration is defined in `playwright.config.ts`:

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled by default (fullyParallel: true)
- **Reporter:** HTML format
- **Trace Collection:** Enabled on first retry
- **Retries:** 2 retries on CI, 0 on local
- **Workers:** Dynamic based on environment
- **Test Timeout:** 10 seconds per test
- **Browsers:** Chromium, Firefox, WebKit

### Test Locators
The test suite uses the following selectors:
- **Input Field:** `textarea[placeholder="Input Your Singlish Text Here."]`
- **Output Section:** Located via "Sinhala" text label with XPath following-sibling
- **Clear Button:** Targets button with "Clear" text

## Git Repository

This is a public repository. To ensure accessibility:
- Repository is publicly available on GitHub
- All necessary files are included for installation and execution
- No private credentials or sensitive information should be committed

## Troubleshooting

### Issue: Tests not found
- **Solution:** Ensure test files are in the `./tests` directory and follow the naming pattern `*.spec.ts` or `*.test.ts`

### Issue: Browser installation fails
- **Solution:** Run `npx playwright install --with-deps` to install system dependencies

### Issue: Port already in use
- **Solution:** Kill processes using the port or modify the `baseURL` in `playwright.config.ts`

### Issue: Timeout errors
- **Solution:** Increase timeout values in `playwright.config.ts` if needed

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Guide](https://playwright.dev/docs/intro)
- [Playwright Configuration](https://playwright.dev/docs/test-configuration)

## Notes

- Test results are automatically generated in HTML format after each test run
- The test suite is configured to run in parallel for faster execution
- All test cases are stored in the `test-results/` directory with detailed information

## Support

For issues or questions regarding this test suite, please refer to:
- [Playwright GitHub Issues](https://github.com/microsoft/playwright/issues)
- Official Playwright documentation




