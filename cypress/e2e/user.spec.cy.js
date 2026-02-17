import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    loginError: '.oxd-alert--error',
    dashboardGrid: '.orangehrm-dashboard-grid',
    myInfo: "[href='/web/index.php/pim/viewMyDetails']",
    myInfoDashboardGrid: '.orangehrm-edit-employee',
    myInfoFirstName: '[name="firstName"]',
    myInfoMiddleName: '[name="middleName"]',
    myInfoLastName: '[name="lastName"]',
    myInfoGenericName: '.oxd-input',
    myInfoDates: "[placeholder='yyyy-dd-mm']",
    myInfoDatesCloseButton: "[data-v-4a95a2e0='']",
    myInfoSaveButton: "[type='submit']"
   
  }

  it.only('User info update', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfo).click()
    cy.get(selectorsList.myInfoDashboardGrid)
    cy.get(selectorsList.myInfoFirstName).clear().type('First Name test')
    cy.get(selectorsList.myInfoMiddleName).clear().type('Middle Name test')
    cy.get(selectorsList.myInfoLastName).clear().type('Last Name test')
    cy.get(selectorsList.myInfoGenericName).eq(4).clear().type('Id test')
    cy.get(selectorsList.myInfoGenericName).eq(5).clear().type('Other Id test')
    cy.get(selectorsList.myInfoGenericName).eq(6).clear().type('Driver License Number test')
    cy.get(selectorsList.myInfoDates).eq(0).clear().type('2026-12-01')
    cy.get(selectorsList.myInfoDatesCloseButton).eq(9).click()
    cy.get(selectorsList.myInfoSaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
   it('Login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginError)
  })
})