
// 03_dynamic_table_pagination.cy.js
// Find item across pages and validate row columns on Offers table

describe('Dynamic Web Table with Pagination (Offers)', () => {
  const url = 'https://rahulshettyacademy.com/seleniumPractise/#/offers'

  it('navigates pages until item is found and verifies columns', () => {
    const target = 'Rice'
    cy.visit(url)

    // Use custom command to paginate until item is present
    cy.findItemInOffers(target)

    // Read row values when found
    cy.contains('td', target).parent('tr').within(() => {
      cy.get('td').eq(0).invoke('text').as('name')
      cy.get('td').eq(1).invoke('text').as('price')
      cy.get('td').eq(2).invoke('text').as('discount')
    })

    cy.get('@name').should('eq', target)
    cy.get('@price').should('match', /^\s*\d+(\.\d+)?\s*$/)
    cy.get('@discount').should('match', /^\s*\d+(\.\d+)?\s*$/)
  })
})
