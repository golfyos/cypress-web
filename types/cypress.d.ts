declare namespace Cypress {
    interface Chainable<Subject> {
        getDataId(id: string): Chainable<JQuery<HTMLElementTagNameMap>>
        login(user?: string, pass?: string): void
        clickButton(element: string): void
    }
}
