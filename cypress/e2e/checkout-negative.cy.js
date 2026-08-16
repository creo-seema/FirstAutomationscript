import Login from "../PageObjects/Login";
import Inventory from "../PageObjects/Inventory";
import Cart from "../PageObjects/Cart";
import Checkout from "../PageObjects/Checkout";

describe('Checkout - Negative Scenarios', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        const ln = new Login();
        ln.setUserName("standard_user");
        ln.setPassword("secret_sauce");
        ln.clickLogin();

        const inventory = new Inventory();
        inventory.addBackpackToCart();
        inventory.goToCart();

        const cart = new Cart();
        cart.goToCheckout();
    });

    it('shows error when first name is missing', () => {
        const checkout = new Checkout();
        cy.get('#last-name').type('Bhardwaj');
        cy.get('#postal-code').type('411001');
        checkout.clickContinue();
        checkout.getErrorMessage().should('contain.text', 'First Name is required');
    });

    it('shows error when postal code is missing', () => {
        const checkout = new Checkout();
        cy.get('#first-name').type('Seema');
        cy.get('#last-name').type('Bhardwaj');
        checkout.clickContinue();
        checkout.getErrorMessage().should('contain.text', 'Postal Code is required');
    });

    it('shows error when all fields are empty', () => {
        const checkout = new Checkout();
        checkout.clickContinue();
        checkout.getErrorMessage().should('contain.text', 'First Name is required');
    });
});