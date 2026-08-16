class Inventory {
    addBackpackToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
    }

    addBikeLightToCart() {
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
    }

    removeBikeLightFromCart() {
        cy.get('#remove-sauce-labs-bike-light').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }

    getCartBadgeCount() {
        return cy.get('.shopping_cart_badge');
    }

    sortProducts(option) {
        cy.get('.product_sort_container').select(option);
    }

    getAllProductPrices() {
        return cy.get('.inventory_item_price');
    }
}

export default Inventory;