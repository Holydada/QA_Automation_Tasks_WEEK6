
// 05_iframe_button.cy.js
// Interact with a button inside the iframe on AutomationPractice

describe('Button inside iFrame', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/'

  it('switches into iframe, clicks button, and verifies success text', () => {
    cy.visit(url)

    // Load and switch to iframe
    cy.frameLoaded('#courses-iframe')

    // Click a prominent CTA inside the iframe
    cy.iframe().contains(/JOIN NOW|JOIN OUR ACADEMY/i).click({force: true})

    // Verify a success/confirmation text appears inside iframe
    cy.iframe().contains(/JOIN OUR ACADEMY|All-Access|Success|Transform your career/i).should('be.visible')
  })
})
