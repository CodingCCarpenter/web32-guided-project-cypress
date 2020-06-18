// write tests here
describe('Inputs and a submit button', () => {
    it('can navigate to the site', () => {
        // remote control operation
        cy.visit('http://localhost:1234')

        // assertion to test something from the rco
        cy.url().should('include', '1234')
    })

    it('submit button should be there', () => {
        cy.get('button#submitBtn')
    })

    it('submit button should be disabled', () => {
        cy.get('button#submitBtn').should('be.disabled')
    })

    it('can type a text for a new quote', () => {
        //rco to get input with name of text
        cy.get('input[name=text]')
            //asserting that the input with name of text has a type of text
            .type('text')
            //chaining another assertion
            .should('have.value', 'text')
    })
    
    //THIS WOULD BE A GOOD TEST THAT BUTTON IS ENABLED
    // it('the submit button should be enabled', () => {
    //     cy.get('button#submitBtn').should('not.be.disabled')
    // })
    
})

describe('Navigates to App', () => {
    it('navigates to our app', () => {
        //rco
        cy.visit('http://localhost:1234')

        //assertion
        cy.url().should('include', 'http://localhost:1234')
    })
})

describe('Test to Test the Tests', () => {
    it('Checks to see that True is Truthy', () => {
        expect(true).to.equal(true)
    })
})

