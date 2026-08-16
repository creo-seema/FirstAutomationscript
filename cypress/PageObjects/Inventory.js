class Inventory {
    addBackpackToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default Inventory;