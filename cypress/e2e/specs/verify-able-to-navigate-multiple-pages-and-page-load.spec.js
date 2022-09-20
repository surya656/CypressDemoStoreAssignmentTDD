/// <reference types="Cypress" />

import MyStoreHomePage from "../pages/MyStoreHomePage"
import NavigationPage from "../pages/NavigationPage"
import ContactUsPage from "../pages/ContactUsPage"
import DressesPage from "../pages/DressesPage"
import LoginPage from "../pages/LoginPage"
import TshirtsPage from "../pages/TshirtsPage"
import WomensPage from "../pages/WomensPage"


describe('Navigate to Multiple Pages and Verify Page Load',()=>{

    const myStoreHomePage = new MyStoreHomePage()
    const navigationPage  = new NavigationPage()
    const contactUsPage = new ContactUsPage()
    const dressesPage  = new DressesPage()
    const loginPage = new LoginPage()
    const tshirtsPage  = new TshirtsPage()
    const womensPage = new WomensPage()

    it('Should be able Navigate to My Store Home and Verify page Load',()=>{
        navigationPage.NavigateToMyStoreHomePage()
        myStoreHomePage.VerifyMyStoreHomePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

    it('Should be able Navigate to Contact Us page and Verify page Load',()=>{
        navigationPage.NavigateToContactUsPage()
        contactUsPage.VerfiyContactUsPageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

    it('Should be able Navigate to Login page and Verify page Load',()=>{
        navigationPage.NavigateToLoginPage()
        loginPage.VerfiyLoginPagePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

    it('Should be able Navigate to Womens page and Verify page Load',()=>{
        navigationPage.NavigateToWomenPage()
        womensPage.VerfiyWomensPageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

    it('Should be able Navigate to Dresses page and Verify page Load',()=>{
        navigationPage.NavigateToDressesPage()
        dressesPage.VerfiyDressesPageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

    it('Should be able Navigate to T-Shirts page and Verify page Load',()=>{
        navigationPage.NavigateToTshirtsPage()
        tshirtsPage.VerfiyTshirtsPageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
    })

})
