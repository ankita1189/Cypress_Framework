describe('Fourth Automation', ()=>{
    it('Handling alerts and child windows', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Alert

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:Alert
        cy.on('window:alert', (str)=>{
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.on('window:confirm', (str)=>{
            //mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //disable child window and open it in the parent window
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //get url and validate
        cy.url().should('include', 'rahulshettyacademy')

        //navigate back
        cy.go('back')

    })
})