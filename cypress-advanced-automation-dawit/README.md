
# Cypress Advanced Automation Exercises (Ready for GitHub)

This repository contains **8 end-to-end Cypress tests** solving the practical exercises you requested:

1. Alerts (alert, confirm, prompt) — vinothqaacademy.com
2. Dropdown with **hover** and submenu — rahulshettyacademy.com
3. Dynamic web table with **pagination** — rahulshettyacademy.com (Offers)
4. Table with **checkboxes** — vinothqaacademy.com
5. Button inside an **iFrame** — rahulshettyacademy.com
6. Switching **between main page and iFrame** — rahulshettyacademy.com
7. **Login using fixture** data — rahulshettyacademy.com
8. **Login with multiple users** from fixture — rahulshettyacademy.com

## Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Open Cypress Test Runner (interactive)
npm run open

# OR run headless
npm test
```

> Tested with **Cypress 13.x**. If you use a different version, adjust config accordingly.

## Structure
```
./cypress/e2e/01_alerts.cy.js
./cypress/e2e/02_hover_submenu.cy.js
./cypress/e2e/03_dynamic_table_pagination.cy.js
./cypress/e2e/04_table_checkboxes.cy.js
./cypress/e2e/05_iframe_button.cy.js
./cypress/e2e/06_switch_main_iframe.cy.js
./cypress/e2e/07_login_fixture.cy.js
./cypress/e2e/08_login_multiple_users.cy.js
./cypress/fixtures/credentials.json
./cypress/fixtures/users.json
./cypress/support/e2e.js
cypress.config.js
package.json
```

## Notes
- For alerts we **stub** `window.alert`, `window.confirm`, and `window.prompt` to capture and assert texts deterministically.
- For iFrames we use **`cypress-iframe`** for reliable context switching.
- For hover submenu we trigger `mouseover` on the hover target and assert submenu visibility/content.
- For Offers table we paginate until we find the item (e.g., **Rice**) and then assert **Price** and **Discount** columns.
- The login page credentials are loaded from fixtures; you can add more users in `cypress/fixtures/users.json`.

Happy testing!
