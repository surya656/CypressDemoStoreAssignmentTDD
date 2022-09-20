/// <reference types="Cypress" />

export default class NavigationPage{

    // naviagte to my store page
    NavigateToMyStoreHomePage(){
        cy.visit(Cypress.env('url'))
    }

    // naviagte to contact us page
    NavigateToContactUsPage(){
        cy.visit(Cypress.env('url')+"?controller=contact")
    }

    // naviagte to login page
    NavigateToLoginPage(){
        cy.visit(Cypress.env('url')+"?controller=authentication&back=my-account")
    }

    // naviagte to t-shirts page
    NavigateToTshirtsPage(){
        cy.visit(Cypress.env('url')+"?id_category=5&controller=category")
    }

    // naviagte to womens page
    NavigateToWomenPage(){
        cy.visit(Cypress.env('url')+"?id_category=3&controller=category")
    }

    // naviagte to dresses page
    NavigateToDressesPage(){
        cy.visit(Cypress.env('url')+"?id_category=8&controller=category")
    }

}

