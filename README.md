# numida-qa

Playwright-based end-to-end tests for the Numida QA project.

## Contents

- Requirements
- Setup instructions
- How to run tests
- Generating Allure reports

---

## Requirements

- Node.js (Recommended: 18.x LTS or newer)
- npm package manager
- Allure for reports

## Setup instructions

1. Clone the repository
   ```bash
   git clone https://github.com/mevinngugi/numida-qa.git
   cd numida-qa
   ```

2. Install Node dependencies
   ```bash
   npm install
   ```

3. Install Playwright browsers
     ```bash
     npx playwright install --with-deps
     ```

## How to run tests

1. Confirm test settings in `playwright.config.ts`

2. Run tests using either:
    - All browsers and devices based in the config
        ```bash
        npx playwright test
        ```
    - On a specific browser 
        ```bash
        npx playwright test --project=chromium
        ```
    - Run tests with a specific tag
        ```bash
        npx playwright test --grep @tagName
        ```

## Generating Allure reports

By default, on local, the tests will generate a list report on the termilal.

- To generate Allure reports, first ensure Allure is installed. Then run:
    ```bash
    npx playwright test --reporter=allure-playwright
    ```
    > Remember this will run all the browsers specified in the config.

- Generate report from the results
    ```bash
    npx allure generate allure-results --clean -o allure-report
    ```

- Open the generated report
    ```bash
    npx allure open allure-report
    ```

## Design Rationale

Independent | Modular | Reuseable

These have been the guiding principles while designing the test framework. Each test is independent of the other, modular in design to allow easy maintenance, and reuseable components to avoid code duplication.

For each tool I had to answer the question: "Who is my customer or audience for this test?"

1. Testcase Management  
Customer: The wider team. | Needs to be easy to understand and collaborate on as the system evolves.  
 **Tool: [Browser Stack Test Management](https://test-management.browserstack.com/projects/3025445/insights/overview/DEFAULT?public_token=3912a0a5b109afda9ef3f4be0515c2e37a15f53d22685339b4a427f7dc5bdd60cab611a15185d361d34b6b1f06e4475d62a8c82727d0a24185ad805735f5a63d&public_token_id=12167)**  
 This allows for proper testcase management, versioning, and collaboration. One can easily track testcases, link them to automation, and generate reports.

2. API Testing  
Customer: Devs, QA, Product, Support teams and even technical customers. | Needs to be one source of truth that is easy to maintain.  
    **Tool: Postman + K6**  
    This allows the team to have one spec of postman collection that serves as the source of truth. Once a new api is developed, QA add it's to the collection and tests. Then using the K6-Postman updates the K6 scripts for performance testing. This one source of truth collection can be used by devs, QA, Product, Support teams and even customers.

3. Automation  
Customer: Devs and QA | The assumption here is that devs and QA are technical enough to read and understand code. From past experience, PMs and non-technical teams hardly look at the BDD scenarios. This means that we are saving time on the BDD layer and focusing on maintainable code.  
    **Tool: Playwright using TypeScript**  
    Playwright provides a robust framework for end-to-end testing with support for multiple browsers and devices. It offers, auto-waiting, retries and parallel testing, right out of the box.

    **Design Patterns:**
    - **Page Object Model (POM)**: Each page has a corresponding class that serves a blueprint on how to interact with the page.
    - **New test, new browser**. Ensures that tests are independent and can run in parallel. This is why starting off in a modular approach was key to me. Drawback: High set up cost, but the tests are maintainable and easy to trace back to requirements.


## Test Plan Document 
- Available on Browser Stack 


## List of identified bugs / gaps
- Bugs: Available on [Github Projects](https://github.com/users/mevinngugi/projects/3)
- Gaps & Edge cases: Available on Browser Stack Test Management. Filter by 'interesting' tag on testcases view.