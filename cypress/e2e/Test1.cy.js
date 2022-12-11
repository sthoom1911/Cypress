///<reference types ='cypress'/>
it('Google Search', () =>{
    cy.visit("https://google.com")
    cy.get('.iblpc').type ('Automation Testing questions')
    cy.contains('.FPdoLc > center > .gNO89b').click ()


})