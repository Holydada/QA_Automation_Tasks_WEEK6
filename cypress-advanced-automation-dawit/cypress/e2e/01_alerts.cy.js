
// 01_alerts.cy.js
// Handle Alert, Confirm, and Prompt on vinothqaacademy.com

describe('Alerts: alert, confirm, prompt', () => {
  const url = 'https://vinothqaacademy.com/alert-and-popup/'

  beforeEach(() => {
    cy.visit(url)
  })

  it('handles simple alert and validates text', () => {
    cy.window().then((win) => {
      const alertStub = cy.stub(win, 'alert').as('alert')
      // Click the element that triggers Alert Box
      cy.contains(/Alert Box/i).click()
      cy.get('@alert').should('have.been.calledOnce')
      cy.get('@alert').its('args.0.0').should((text) => {
        expect(text).to.match(/alert|notice|message/i)
        expect(text).to.have.length.greaterThan(0)
      })
    })
  })

  it('handles confirmation alert: accept and dismiss', () => {
    // Accept (OK)
    cy.window().then((win) => {
      const confirmAccept = cy.stub(win, 'confirm').callsFake((t) => {
        expect(t).to.match(/confirm|are you sure|ok/i)
        return true
      }).as('confirmAccept')
      cy.contains(/Confirm Alert Box/i).click()
      cy.get('@confirmAccept').should('have.been.calledOnce')
    })

    // Dismiss (Cancel)
    cy.window().then((win) => {
      const confirmDismiss = cy.stub(win, 'confirm').callsFake((t) => {
        expect(t).to.match(/confirm|are you sure|ok/i)
        return false
      }).as('confirmDismiss')
      cy.contains(/Confirm Alert Box/i).click()
      cy.get('@confirmDismiss').should('have.been.calledOnce')
    })
  })

  it('handles prompt: enters text and validates it appears on page', () => {
    const inputText = 'Dawit QA'
    cy.window().then((win) => {
      const promptStub = cy.stub(win, 'prompt').returns(inputText).as('prompt')
      cy.contains(/Prompt Alert Box/i).click()
      cy.get('@prompt').should('have.been.calledOnce')
    })

    // Validate result is displayed somewhere on the page
    cy.contains(inputText, {matchCase: false}).should('exist')
  })
})
