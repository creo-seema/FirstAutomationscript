import Login from "../PageObjects/Login";
import Inventory from "../PageObjects/Inventory";
import Cart from "../PageObjects/Cart";
import Checkout from "../PageObjects/Checkout";

describe('Checkout flow', () => {
  it('adds a product to cart and completes checkout', () => {
    cy.fixture('checkoutData').then((data) => {
      cy.visit('https://www.saucedemo.com/')

      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickLogin();

      const inventory = new Inventory();
      inventory.addBackpackToCart();
      inventory.goToCart();

      const cart = new Cart();
      cart.verifyProductInCart('Sauce Labs Backpack');
      cart.goToCheckout();

      const checkout = new Checkout();
      checkout.enterInfo(data.firstName, data.lastName, data.postalCode);
      checkout.finishOrder();
      checkout.verifyOrderComplete();
    })
  })
})
