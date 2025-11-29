
// ***********************************************************
// This support file is processed and loaded automatically
// before your test files.
// ***********************************************************

import 'cypress-iframe'

// Custom utility to paginate the Offers table until an item is found
Cypress.Commands.add('findItemInOffers', (itemName) => {
  const tryFind = () => {
    // Check if the item exists on current page
    return cy.get('table tbody tr td:nth-child(1)').then(($cells) => {
      const names = Array.from($cells, c => c.innerText.trim())
      if (names.includes(itemName)) {
        return true
      }
      // Not found, go next if possible
      return cy.get('.pagination li a').contains(/next/i).then(($next) => {
        const isDisabled = $next.closest('li').hasClass('disabled')
        if (isDisabled) {
          return false
        }
        cy.wrap($next).click({force: true})
        return tryFind()
      })
    })
  }

  return tryFind().then((found) => {
    expect(found, `Expect to find ${itemName} in offers table`).to.be.true
  })
})
