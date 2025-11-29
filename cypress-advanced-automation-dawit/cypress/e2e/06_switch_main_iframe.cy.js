
// 06_switch_main_iframe.cy.js
// Demonstrates switching between main page and iframe interactions

describe('Switching between Main Page and iFrame', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/'

  it('interacts on main page, inside iframe, and back to main page', () => {
    cy.visit(url)

    // Main page interaction: check a checkbox
    cy.contains('Checkbox Example').scrollIntoView()
    cy.get('#checkBoxOption1').check().should('be.checked')

    // Switch to iframe and interact
    cy.frameLoaded('#courses-iframe')
    cy.iframe().contains(/Browse Courses|JOIN NOW|Mentorship/i).click({force: true})
    cy.iframe().contains(/Courses|Mentorship|All-Access/i).should('be.visible')

    // Switch back to main page and continue
    cy.get('#radio-btn-example').scrollIntoView()
    cy.get('input[value="radio1"]').check().should('be.checked')
  })
})
