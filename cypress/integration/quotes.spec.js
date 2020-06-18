// write tests here
describe('Inputs and a submit button', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:1234')
        cy.url().should('include', 'http://localhost:1234')
    })
})


