class ProductPage{

    checkoutButton(){
       return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    getCheckoutBtn1(){
        return cy.contains('Checkout')
    }

    getCountry(){
        return cy.get('#country')
    }

    selectCountry(){
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckbox2(){
        return cy.get('#checkbox2')
    }

    submitBtn(){
        return cy.get('input[type="submit"]')
    }

    getAlert(){
        return cy.get('.alert')
    }

    getProductTotal(){
        return cy.get('tr td:nth-child(4) strong')
    }

    totalProduct(){
        return cy.get('h3 strong')
    }

}
export default ProductPage