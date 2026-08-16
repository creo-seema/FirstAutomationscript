# SauceDemo Test Automation — POC

Automated end-to-end testing framework for [SauceDemo](https://www.saucedemo.com/), built with Cypress and the Page Object Model, integrated with GitHub Actions CI/CD, parallel test execution, and automated Microsoft Teams reporting.

## Objective

This Proof of Concept demonstrates a complete, production-style test automation pipeline — from writing tests locally to fully automated execution and reporting in CI, triggered on every code push.

---

## Tech Stack

| Component | Tool |
|---|---|
| Test Framework | Cypress |
| Design Pattern | Page Object Model (POM) |
| Reporting | cypress-mochawesome-reporter |
| Parallel Execution | cypress-parallel |
| CI/CD | GitHub Actions |
| Notifications | Microsoft Teams (Workflows webhook) |
| Version Control | Git / GitHub |

---

## Scenarios Automated

1. **Login** — validates successful login to SauceDemo with standard user credentials
2. **Checkout Flow** — end-to-end purchase flow:
   - Login
   - Add "Sauce Labs Backpack" to cart
   - Navigate to cart, verify product
   - Complete checkout (customer info → order confirmation)

---

## Project Structure

```
FirstAutomationScript/
├── .github/
│   └── workflows/
│       └── cypress.yml          # CI/CD pipeline definition
├── cypress/
│   ├── e2e/
│   │   ├── LoginTest.cy.js      # Login test spec
│   │   └── Checkout.cy.js       # Checkout flow test spec
│   ├── PageObjects/
│   │   ├── Login.js
│   │   ├── Inventory.js
│   │   ├── Cart.js
│   │   └── Checkout.js
│   ├── fixtures/                # Test data
│   ├── parallel-weights.json    # Spec weighting for parallel runs
│   └── reports/html/            # Auto-generated test reports
├── cypress.config.js
└── package.json
```

---

## Running Tests Locally

**Install dependencies:**
```bash
npm install
```

**Run all tests sequentially:**
```bash
npm run test
```

**Run all tests in parallel:**
```bash
npm run cy:parallel
```

**View the report:**
After either run completes, an HTML report is automatically generated at:
```
cypress/reports/html/index.html
```
No manual merge/generate steps required — reporting is fully automatic via the `cypress-mochawesome-reporter` plugin.

---

## CI/CD Pipeline (GitHub Actions)

**Trigger:** Every `push` or `pull request` to the `main` branch.

**Pipeline steps:**
1. Checkout code
2. Set up Node.js
3. Install dependencies
4. Run Cypress test suite
5. Upload the HTML report as a downloadable workflow artifact
6. Send an automated notification to a Microsoft Teams channel

**Workflow file:** [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml)

This means: **every code push automatically triggers the full test suite — no manual intervention needed.**

---

## Automated Teams Notification

On completion of every pipeline run (pass or fail), a message is posted automatically to a Microsoft Teams channel via an Adaptive Card, including:
- Repository name
- Branch
- Run status (success/failure)
- A direct link to the GitHub Actions run, where the full HTML report can be downloaded

This closes the loop — the team is notified the moment a run finishes, without needing to check GitHub manually.


---

## Parallel Execution

Test specs can be executed in parallel using `cypress-parallel`, distributing spec files across multiple threads to reduce overall execution time — configured via `cypress/parallel-weights.json` and the `cy:parallel` npm script.

---

## Key Outcomes of this POC

- ✅ Reusable, maintainable test structure using Page Object Model
- ✅ Fully automated CI pipeline triggered on every push
- ✅ Zero-touch HTML report generation
- ✅ Real-time team visibility via automated Teams notifications
- ✅ Parallel execution capability for faster feedback as the suite grows

---

## Next Steps / Scalability

- Expand test coverage (negative login scenarios, multiple products, different user personas provided by SauceDemo)
- Add cross-browser execution (Chrome, Firefox, Edge)

