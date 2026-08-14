
import Login from "../PageObjects/Login";

describe('Login to the application', () => {
  it('launch the application', () => {
    cy.visit('https://www.saucedemo.com/')
    const ln = new Login();
    ln.setUserName("standard_user");
    ln.setPassword("secret_sauce");
    ln.clickLogin();

  })
})