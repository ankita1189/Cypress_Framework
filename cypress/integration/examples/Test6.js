describe('Sixth Automation', ()=>{
    it('Handling mouse hover', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        cy.url().should('include', 'top')

        //click on hidden / invisible elements in the dom
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top')


    })
})