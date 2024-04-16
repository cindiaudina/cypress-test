describe('Login Test', () => {
    it('Test1 - valid login', () => {
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
      cy.get('#Input_UsernameVal').type('charles.estevez')
      cy.get('#Input_PasswordVal').type('123456')
      cy.get('.btn').click()
    })
  })