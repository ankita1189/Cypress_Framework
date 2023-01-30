
///<reference types="Cypress"/>

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
describe('Ninth Automation ', ()=>{

    before(function(){
        //runs once before all the tests in the block
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })


    it('Framework building', function (){
        
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url')+'angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataFinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr','minlength',2)
        homePage.getEnterpreneur().should('be.disabled')

        // cy.pause() // pauses the script there for debugging
        homePage.getShopTab().click()
        Cypress.config('pageLoadTimeout', 20000)

        this.data.productName.forEach(function(el){
            cy.selectProducts(el) 
        })
        productPage.checkoutButton().click();
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

        productPage.getCheckoutBtn1().click();
        productPage.getCountry().type('India');
        productPage.selectCountry().click();
        productPage.getCheckbox2().click({force:true});
        productPage.submitBtn().click();
        // productPage.getAlert().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        productPage.getAlert().then(function(ele){
            const actualText = ele.text()
            expect(actualText.includes("Success")).to.be.true  
        })
        




    })
})