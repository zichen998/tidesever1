describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8084/#/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Trend direction !!')
  })

  it('Shows the correct title', () => {
    cy.get('[data-test-title]').should('contain', 'It is a show time !!')
  })
  it('Shows the content', () => {
    cy.get('[data-test-content]').should('contain', 'Just click')
  })
  /*it('Shows the picture', () => {
    cy.get('[data-test-image]').should('contain', 'abc')
  })*/

  describe('Navigation bar', () => {
    it('Shows the required links', () => {
      cy.get('.navbar').find('[data-test-showbtn]')
      cy.get('.navbar').contains('Home')
      cy.get('.navbar').find('[data-test-showbtn2]')
      cy.get('.navbar').contains('Manage Products')
      cy.get('.navbar').find('[data-test-showbtn3]')
      cy.get('.navbar').contains('Show')
      cy.get('.navbar-nav:nth-child(1)').within(() => {
        cy.get('.nav-item:first').should('contain', 'Home')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Manage Products')
        cy.get('.nav-item:nth-child(3)').should('contain', 'Show')
        cy.get('.nav-item:nth-child(4)').should('contain', 'Map')
      })
      cy.get('.navbar-nav:nth-child(2)').within(() => {
        cy.get('.nav-item:first').should('contain', 'About')
        cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
      })
    })

    it('Redirects when links are clicked', () => {
      cy.get('[data-test-showbtn]').click()
      cy.url().should('include', 'http://localhost:8084/#/')
      cy.get('[data-test-showbtn2]').click()
      cy.url().should('include', 'http://localhost:8084/#/products')
      cy.get('[data-test-showbtn3]').click()
      cy.url().should('include', 'http://localhost:8084/#/show')
    })
  })
})
