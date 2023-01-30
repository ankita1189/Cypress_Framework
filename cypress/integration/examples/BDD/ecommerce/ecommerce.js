import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";

const homePage = new HomePage()
const productPage = new ProductPage()
let name;

Given('I open ecommerce page',()=>{
    cy.visit(Cypress.env('url')+'angularpractice/')
})

When('I add items to cart',function(){
    homePage.getShopTab().click()
    this.data.productName.forEach(function(el){
        cy.selectProducts(el) 
    })
    productPage.checkoutButton().click()
})

When('Validate the total prices',()=>{
    var sum =0;
        productPage.getProductTotal().each((e1,index,list)=>{
            var val = e1.text().split(" ")
            val = val[1].trim();
            sum = Number(sum)+Number(val)
            

        }).then(function(){
            cy.log(sum)
        })

        productPage.totalProduct().then(function(el){
            const amt = el.text()
            let res = amt.split(" ")
            res = res[1].trim()
            expect(Number(res)).to.equal(sum)
        })

})

Then('select the country submit and verify Thankyou',()=>{
    productPage.getCheckoutBtn1().click();
    productPage.getCountry().type('India');
    productPage.selectCountry().click();
    productPage.getCheckbox2().click({force:true});
    productPage.submitBtn().click();
    productPage.getAlert().then(function(ele){
        const actualText = ele.text()
        expect(actualText.includes("Success")).to.be.true  
    })

})

When('I fill the form details',(dataTable)=>{

    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour and select Shop',()=>{
    homePage.getTwoWayDataFinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength',2)
    homePage.getEnterpreneur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 20000)
    // cy.pause() // pauses the script there for debugging
    homePage.getShopTab().click()
    
})