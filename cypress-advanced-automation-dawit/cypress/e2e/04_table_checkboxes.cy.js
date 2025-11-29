
// 04_table_checkboxes.cy.js
// Interact with table checkboxes on vinothqaacademy.com

describe('Table with Checkboxes', () => {
  const url = 'https://vinothqaacademy.com/webtable/'

  it('selects and deselects checkboxes and validates UI changes', () => {
    cy.visit(url)

    // Initial row count
    cy.get('table tbody tr').its('length').as('initialCount')

    // Select first two rows
    cy.get('table tbody tr').eq(0).find('input[type="checkbox"]').check().should('be.checked')
    cy.get('table tbody tr').eq(1).find('input[type="checkbox"]').check().should('be.checked')

    // Deselect second row
    cy.get('table tbody tr').eq(1).find('input[type="checkbox"]').uncheck().should('not.be.checked')

    // Delete selected rows and verify row count decreased by 1
    cy.contains(/Delete Selected Rows/i).click()

    cy.get('@initialCount').then((initial) => {
      cy.get('table tbody tr').its('length').should('eq', initial - 1)
    })
  })
})
