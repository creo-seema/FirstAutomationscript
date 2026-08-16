import Login from "../PageObjects/Login";
import Inventory from "../PageObjects/Inventory";
import Cart from "../PageObjects/Cart";
import Checkout from "../PageObjects/Checkout";

describe('Checkout flow', () => {
  it('adds a product to cart and completes checkout', () => {
    cy.visit('https://www.saucedemo.com/')

    const ln = new Login();
    ln.setUserName("standard_user");
    ln.setPassword("secret_sauce");
    ln.clickLogin();

    const inventory = new Inventory();
    inventory.addBackpackToCart();
    inventory.goToCart();

    const cart = new Cart();
    cart.verifyProductInCart('Sauce Labs Backpack');
    cart.goToCheckout();

    const checkout = new Checkout();
    checkout.enterInfo('Seema', 'Bhardwaj', '411001');
    checkout.finishOrder();
    checkout.verifyOrderComplete();
  })
})