// write tests here
describe('Inputs and a submit button', () => {
    it('can navigate to the site', () => {
        // remote control operation
        cy.visit('http://localhost:1234')

        // assertion to test something from the rco
        cy.url().should('include', '1234')
    })
})


