describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    loginError: '.oxd-alert--error',
    sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',

    }
  
  it('Login with sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.sectionTitleTopbar).should('be.visible')
    cy.get(selectorsList.sectionTitleTopbar).contains('Dashboard')
  })
   it('Login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginError)
  }) 
})