describe('RestaurantRandomizer', () => {

  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should contain randomed restaurant name', () => {
    cy.get('[data-cy=restaurant-name]')
  })

  it('should contain location dropdown box', () => {
    cy.get('[data-cy=location-dropdown]')
  })

  it('should contain random button', () => {
    cy.get('[data-cy=random-button]')
  })

})

describe('Random button', () => {

  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('label should be `Random`', () => {
    cy.get('[data-cy=random-button]').should('contain', 'Random!')
  })

  it('should change its label to `Random Again` after be clicked', () => {
    cy.get('[data-cy=random-button]').click()
    cy.get('[data-cy=random-button]').should('contain', 'Random Again!')
  })

  it('should change itslabel back to `Random` after be clicked 2 times', () => {
    cy.get('[data-cy=random-button]').click()
    cy.get('[data-cy=random-button]').click()
    cy.get('[data-cy=random-button]').should('contain', 'Random!')
  })

})

describe('Restaurant Name', () => {

  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should change its value every 0.1s', () => {
      cy.get('[data-cy=restaurant-name]').then((restaurantName) => {
      const previousRestaurantName = restaurantName.text()
      console.log('pre', previousRestaurantName)
      function waitForRestaurantNameToChange() {
        return new Cypress.Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('')
          }, 100)
        })
      }
      cy.wrap(null).then(() => {
        return waitForRestaurantNameToChange().then(() => {
          cy.get('[data-cy=restaurant-name]').should('not.contain', previousRestaurantName)
        })
      })
    })
  })

  it('should stop changing its value after clicking `Random` button', () => {
    cy.get('[data-cy=random-button').click()
    cy.get('[data-cy=restaurant-name]').then((restaurantName) => {
      const previousRestaurantName = restaurantName.text()
      console.log('pre', previousRestaurantName)
      function waitForRestaurantNameToChange() {
        return new Cypress.Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('')
          }, 100)
        })
      }
      cy.wrap(null).then(() => {
        return waitForRestaurantNameToChange().then(() => {
          cy.get('[data-cy=restaurant-name]').should('contain', previousRestaurantName)
        })
      })
    })
  })

  it('should have href that contains wongnai.com', () => {
    cy.get('[data-cy=random-button]').click()
    cy.get('[data-cy=restaurant-name]').invoke('attr', 'href').should('contain', 'wongnai.com')
  })

})