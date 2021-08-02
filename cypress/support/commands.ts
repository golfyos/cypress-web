Cypress.Commands.add('getDataId', (id: string) => {
    return cy.get(`[data-id="${id}"]`)
})

Cypress.Commands.add('login', (user: string = 'test@gmail.com', pass: string = 'test') => {
    cy.get('#header-link-signin').click()
    cy.get('#signin-text-input-email').type(user)
    cy.get('#signin-text-input-password').type(pass)
    cy.get('#signin-button-signin').click()
    cy.wait(2000)
})

Cypress.Commands.add('clickButton', (element: string) => {
    return cy.get(element).click()
})
