describe("Тестирование корзины", function() {
    it("Проверка, изменение количества товара в корзине", function() {
        cy.visit("https://huntingpony.com/");
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').click();
        cy.get('.header__control-text').click();
        cy.get('.is-count-up').click();
        cy.get('.header__control-text').click();
        cy.get('.cart-controls > .button').click();
        cy.contains("Оформление заказа");
    })
})