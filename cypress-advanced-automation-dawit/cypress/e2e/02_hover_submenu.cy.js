
// 02_hover_submenu.cy.js
// Validate hover dropdown submenu on rahulshettyacademy.com

describe('Dropdown with Hover and Submenu', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/'

  it('shows submenu on hover and validates content', () => {
    cy.visit(url)
    cy.contains('Mouse Hover').scrollIntoView()

    // Submenu is hidden initially
    cy.get('.mouse-hover-content').should('not.be.visible')

    // Trigger hover on the hover target
    cy.get('#mousehover').trigger('mouseover')

    // Now submenu should be visible
    cy.get('.mouse-hover-content').should('be.visible')

    // Validate items
    cy.contains('.mouse-hover-content a', 'Top').should('be.visible')
    cy.contains('.mouse-hover-content a', 'Reload').should('be.visible')
  })
})
