/// <reference types="Cypress" />

export default class SignInPage{

    // verify signin page load
    VerifySignInPageLoad(){
        cy.contains('h3','Create an account').scrollIntoView().should('be.visible')
    }

    // create a new account
    CreateAnAccount(emailId){
        cy.get('input[name="email_create"]').scrollIntoView().should('be.visible').type(emailId)
        cy.get('button#SubmitCreate').scrollIntoView().should('be.visible').click()
    }

    // enter personal details i.e firstname,lastname,city,phone,alias etc
    EnterPersonalDetails(locatorText,enterText){
        cy.get(`${locatorText}`).scrollIntoView().should('be.visible').clear().type(enterText)
    }

    // verify user is created 
    VerifyUserAccountCreated(){
        cy.contains('h3','Your personal information').scrollIntoView().should('be.visible')
    }

    // click on title i.e Mr.
    ClickOnTitle(){
        cy.contains('label','Mr.').scrollIntoView().should('be.visible').click()
    }

    // click on register button
    ClickOnRegisterButton(){
        cy.contains('button','Register').scrollIntoView().should('be.visible').click()
    }

    SelectState(state){
        cy.get('select#id_state').select(state).should('contain',state)
    }
}


