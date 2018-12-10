
describe('Manage Products page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8084/#/products').wait(2000)
  })

  it('allows a products to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 2)
    // Click trash/delete link of 3rd donation in list
    cy.get(':nth-child(1) > :nth-child(10) > .fa').click()
 //   cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 1)
  })

  it("edit", () => {
    cy.get(':nth-child(9) > .fa').click()
    cy.get('.vue-title').should("contain","Update Product")
    cy.get('#size').select('XL')
    cy.get(':nth-child(2) > .form__input').clear()
    cy.get(':nth-child(2) > .form__input').type('688')
    cy.get(':nth-child(4) > .btn').click()
  })
it("upvote", () => {
    cy.get(':nth-child(8) > .fa').click()
    cy.get('tbody > tr > :nth-child(7)').should("contain",'1')
  })
  // it("shows and hides a product's message", () => {
  //   // Click + symbol of 2nd product in list
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
  //   // Unclick same + symbol
  //   cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
  //   cy.get('div.vue-message').should('not.exist')
  // })
})
