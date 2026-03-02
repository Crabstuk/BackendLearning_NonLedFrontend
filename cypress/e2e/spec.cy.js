describe('template spec', () => {
    it('yesClick', () => {
    cy.visit('localhost:5500')
    cy.get("#yesButton").click();
    cy.get("#giftDisplay")
     .should('have.attr', 'src')
  })

      it('noClick', () => {
    cy.visit('localhost:5500')
    cy.get("#noButton").click();
    cy.get("#giftDisplay")
     .should('have.attr', 'src')
      })
    it('form', () => {
      cy.visit('localhost:5500')
      cy.get('#nameOfGiftInput').type("i caca")
      cy.get('#sourceOfGiftInput').type("https://www.bing.com/th/id/OIP._wkp_Rzc3N5XxQcbjaH7ygHaHa?w=167&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")    
      cy.get('#IsItAGoodGiftCheckbox').click()
      cy.get('#sendGiftToDBButton').click()
    })
    it('carbstuk', () => {
      cy.visit("https://Crabstuk.github.io")
    })
  })



