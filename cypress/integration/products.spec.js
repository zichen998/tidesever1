
describe('Manage Products page', () => {
  beforeEach(() => {
    // Delete all donations in the API's datastore
    cy.request('http://localhost:8084/#/products')
      .its('body')
      .then((products) => {
        products.forEach((element) => {
          cy.request('DELETE',
            'http://localhost:8084/#/products' + element._id)
        })
      })
    // Populate API's datastore
    cy.fixture('products')
      .then((products) => {
        products.forEach((product) => {
          cy.request('POST',
            'http://localhost:8084/#/products', product)
        })
      })
    cy.visit('http://localhost:8084/#/products')
    // Click Manage Donations navbar link
    cy.get('.navbar-nav:nth-child(1)')
      .find('.nav-item:nth-child(2)').click()
  })

  it('allows a products to be deleted', () => {
    cy.get('tbody').find('tr').should('have.length', 4)
    // Click trash/delete link of 3rd donation in list
    cy.get('tbody').find('tr:nth-child(3)').find('td:nth-child(8)').click()
    // Click confirmation button
    cy.get('button').contains('Delete').click()
    cy.get('tbody').find('tr').should('have.length', 3)
  })
/*
  it("shows and hides a donation's message", () => {
    // Click + symbol of 2nd donation in list
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
    cy.get('div.vue-message', {timeout: 5000}).should('contain', 'The message is [ Hope this helps')
    // Unclick same + symbol
    cy.get('tbody').find('tr:nth-child(2)').find('td:nth-child(1)').click()
    cy.get('div.vue-message').should('not.exist')
  }) */
})
