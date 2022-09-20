// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// created custom command to verify page header load
Cypress.Commands.add('verifyPageHeaderLoad',()=>{
    cy.get('a[title="Contact Us"]').scrollIntoView().should('be.visible')
    cy.get('a[title="Log in to your customer account"]').scrollIntoView().should('be.visible')
})

// created custom command to verify page footer load
Cypress.Commands.add('verifyPageFooterLoad',()=>{
    cy.contains('a','Ecommerce software by PrestaShop™').scrollIntoView().should('be.visible')
    cy.contains('a','My account').scrollIntoView().should('be.visible')
    cy.contains('h4','Store information').scrollIntoView().should('be.visible')
    cy.contains('h4','Follow us').scrollIntoView().should('be.visible')
})

// created custom command to subscribe to news letter
Cypress.Commands.add('subscribeToNewsLetter',(emailId)=>{
    cy.contains('h4','Newsletter').scrollIntoView().should('be.visible')
    cy.get('input[value="Enter your e-mail"]').scrollIntoView().type(emailId)
    cy.get('button[name="submitNewsletter"]').should('be.visible').click()
})

// created custom command to verify subscribed to news letter
Cypress.Commands.add('verifySubscribeToNewsLetter',()=>{
    cy.contains('p','Newsletter : You have successfully subscribed to this newsletter.').scrollIntoView().should('be.visible')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })