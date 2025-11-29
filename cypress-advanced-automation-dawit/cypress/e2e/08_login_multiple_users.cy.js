
// 08_login_multiple_users.cy.js
// Login with multiple users from fixture

describe('Login with multiple users from fixture', () => {
  const url = 'https://rahulshettyacademy.com/loginpagePractise/'

  it('iterates users and logs in successfully', () => {
    cy.fixture('users').then((users) => {
      users.forEach((user) => {
        cy.visit(url)
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)

        // Choose role if needed (Admin/User radio)
        if (user.role === 'admin') {
          cy.contains('label', 'Admin').find('input[type="radio"]').check({force: true})
        } else {
          cy.contains('label', 'User').find('input[type="radio"]').check({force: true})
        }

        cy.get('#terms').check({force: true})
        cy.get('#signInBtn').click()

        cy.url().should('include', 'angular')
        cy.contains(/Shop|ProtoCommerce|Home/i).should('be.visible')

        // Optionally, log out and continue (if logout exists)
        cy.go('back')
      })
    })
  })
})
