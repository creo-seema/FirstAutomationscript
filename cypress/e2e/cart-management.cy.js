import Login from "../PageObjects/Login";
import Inventory from "../PageObjects/Inventory";

describe('Cart Management', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        const ln = new Login();
        ln.setUserName("standard_user");
        ln.setPassword("secret_sauce");
        ln.clickLogin();
    });

    it('adds Sauce Labs Bike Light to cart and removes it', () => {
        const inventory = new Inventory();

        inventory.addBikeLightToCart();
        inventory.getCartBadgeCount().should('have.text', '1');

        inventory.removeBikeLightFromCart();
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});