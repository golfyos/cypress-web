describe('Customer', () => {
    it('should login success', () => {
        cy.visit('/')
        cy.get('#header-link-signin').click()
    })
})
