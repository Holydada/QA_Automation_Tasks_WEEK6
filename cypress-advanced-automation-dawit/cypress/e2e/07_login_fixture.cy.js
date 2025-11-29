
// 07_login_fixture.cy.js
// Login using fixture data on loginpagePractise

describe('Login using fixture data', () => {
  const url = 'https://rahulshettyacademy.com/loginpagePractise/'

  it('logs in successfully with valid credentials from fixture', () => {
    cy.fixture('credentials').then((cred) => {
      cy.visit(url)
      cy.get('#username').type(cred.username)
      cy.get('#password').type(cred.password)
      cy.get('#terms').check({force: true})
      cy.get('#signInBtn').click()

      // Verify successful login by URL/content
      cy.url().should('include', 'angular')
      cy.contains(/Shop|ProtoCommerce|Home/i).should('be.visible')
    })
  })
})
