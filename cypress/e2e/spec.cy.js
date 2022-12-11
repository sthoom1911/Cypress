const { contains } = require("cypress/types/jquery")

  it('passes', () => {
    cy.visit('http://example.cypress.io') //open the page
    cy.contains('get').click
    cy.get('#query-btn')
    .should('contains','Button')
 
   
  })
