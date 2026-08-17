import Login from "../PageObjects/Login";

describe('Login to the application', () => {
  it('launch the application', () => {
    cy.fixture('checkoutData').then((data) => {
      cy.visit('https://www.saucedemo.com/')
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickLogin();
    })
  })
})