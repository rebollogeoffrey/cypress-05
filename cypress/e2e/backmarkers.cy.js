describe('Inscription', () => {
    let user = require("../fixtures/userData.json")

    it(user.fullName, () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')

        // Register
        cy.get('[data-qa=accept-cta]').click()

        // Get an input, type into it
        cy.get('#firstName').type(user.firstName)
        //  Verify that the value has been updated
        cy.get('input[id="firstName"]').should('have.value', user.firstName)

        // Get an input, type into it
        cy.get('#lastName').type(user.lastName)
        //  Verify that the value has been updated
        cy.get('input[id="lastName"]').then(actualValue => {
            expect(actualValue).to.have.value(user.lastName)
        })

        // Get an input, type into it
        cy.get('#signup-email').type(user.email)
        //  Verify that the value has been updated
        cy.get('input[id="signup-email"]').then(actualValue => {
            expect(actualValue).to.have.value(user.email)
        })

        // Get an input, type into it
        cy.get('#signup-password').type(user.password)
        //  Verify that the value has been updated
        cy.get('input[id="signup-password"]').then(actualValue => {
            expect(actualValue).to.have.value(user.password)
        })

        // Register
        cy.get('[data-qa=signup-submit-button]').click()
        // Vérify the URL after click
        cy.url().should('include', '/dashboard')

    })
})