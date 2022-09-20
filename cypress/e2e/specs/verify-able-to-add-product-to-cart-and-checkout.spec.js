/// <reference types="Cypress" />

import MyStoreHomePage from "../pages/MyStoreHomePage"
import NavigationPage from "../pages/NavigationPage"
import * as NewsletterTestData from "./verify-able-to-subscribe-newsletter.testdata"
import AddressPage from "../pages/AddressPage"
import ShippingPage from "../pages/ShippingPage"
import PaymentPage from "../pages/PaymentPage"
import SignInPage from "../pages/SignInPage"
import SummaryPage from "../pages/SummaryPage"
import * as LocatorText from "../../support/locators"


describe('Add Product To Cart and Checkout',()=>{

    const myStoreHomePage = new MyStoreHomePage()
    const navigationPage  = new NavigationPage()
    const addressPage = new AddressPage()
    const shippingPage = new ShippingPage()
    const paymentPage = new PaymentPage()
    const summaryPage = new SummaryPage()
    const signInPage = new SignInPage() 

    before('Fetch Personal Details from fixture',function(){
        //using fixtures 
        cy.fixture('personalInformation').then(function(data){
            globalThis.data = data
        })
    })
   
    it('Should be able add product to cart and checkout',()=>{
        navigationPage.NavigateToMyStoreHomePage()
        myStoreHomePage.VerifyMyStoreHomePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
        //Add To Cart 1st product available on My StoreHome page 
        myStoreHomePage.GetDetailsOfProduct(LocatorText.productName,LocatorText.productNameAlias)
        myStoreHomePage.GetDetailsOfProduct(LocatorText.productPrice,LocatorText.productPriceAlias)
        myStoreHomePage.ClickOnAddToCartButton(LocatorText.cartProductName,LocatorText.productNameAlias,LocatorText.cartProductPrice,LocatorText.productPriceAlias)


        // Verify Product details on Summary page and Click on Proceed button ON summary page
        summaryPage.VerifySummaryPageLoad()
        summaryPage.VerifyProductDetails(LocatorText.productNameSummary,LocatorText.productNameAlias)
        summaryPage.ClickOnProceedToCheckoutButton()

       
        // Create An User Account and Enter Personal Details on SignIn Page
        signInPage.VerifySignInPageLoad()
        signInPage.CreateAnAccount(NewsletterTestData.emailId)
        signInPage.VerifyUserAccountCreated()
        signInPage.ClickOnTitle()
        signInPage.EnterPersonalDetails(LocatorText.firstName,globalThis.data.firstName)
        signInPage.EnterPersonalDetails(LocatorText.lastName,globalThis.data.lastName)
        signInPage.EnterPersonalDetails(LocatorText.password,globalThis.data.password)
        signInPage.EnterPersonalDetails(LocatorText.firstname,globalThis.data.firstName)
        signInPage.EnterPersonalDetails(LocatorText.lastname,globalThis.data.lastName)
        signInPage.EnterPersonalDetails(LocatorText.address,(globalThis.data.address))
        signInPage.EnterPersonalDetails(LocatorText.city,(globalThis.data.city))
        signInPage.SelectState(globalThis.data.state)
        signInPage.EnterPersonalDetails(LocatorText.postcode,globalThis.data.postalcode)
        signInPage.EnterPersonalDetails(LocatorText.phone_mobile,globalThis.data.phone)
        signInPage.EnterPersonalDetails(LocatorText.alias,globalThis.data.alias)
        signInPage.ClickOnRegisterButton()

        // Verify Personal Details Entered on Address Page
        addressPage.VerifyAddressPage()
        addressPage.VerifyDeliveryAddress(globalThis.data.firstName,globalThis.data.lastName,globalThis.data.address,globalThis.data.city,globalThis.data.state,globalThis.data.phone)
        addressPage.VerifyBillingAddress(globalThis.data.firstName,globalThis.data.lastName,globalThis.data.address,globalThis.data.city,globalThis.data.state,globalThis.data.phone)
        addressPage.ClickOnProceedToCheckout()
        
        // Accept Terms of Service on Shipping Page
        shippingPage.VerifyShippingPage()
        shippingPage.ClickOnTermsOfService()
        shippingPage.ClickOnProceedToCheckout()
       
        // Verrify Product Details added to cart on Payment Page
       paymentPage.VerifyPaymentsPage()
       paymentPage.VerifyProductDetails(LocatorText.productNameAlias)
       paymentPage.VerifyProductDetails(LocatorText.productPriceAlias)
    })

    

})
