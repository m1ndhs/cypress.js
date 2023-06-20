describe("Тестирование наличия ховера на кнопках", function() {
    it("Проверка, наличие ховера на кнопке 'Telegram'", function() {
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".icon").trigger('mouseover')
    });
    it("Проверка, наличие ховера на кнопке 'Github'", function() {
        cy.visit("https://m1ndhs.github.io/");
        cy.get('.fa-github').trigger('mouseover');
    });
     it("Проверка, наличие ховера на кнопке 'Gmail'", function() {
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".fa-google").trigger('mouseover');
    });
})
describe("Наличие ссылок на telegram, github, gmail", function () {
    it("Проверка, наличие ссылки на телеграм", function (){
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".icon").should("have.attr", "href")
        .should("not.be.empty")
        .and("contain", "https://t.me/m1ndde");

    });
    it("Проверка, наличие ссылки на github", function (){
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".fa-github").should("have.attr", "href")
        .should("not.be.empty")
        .and("contain", "https://github.com/m1ndhs");

    });
    it("Проверка, наличие ссылки на github", function (){
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".fa-google").should("have.attr", "href")
        .should("not.be.empty")
        .and("contain", "mailto:mndlower@gmail.com");

    });
})
describe("Наличие copyright", function () {
    it("Проверка наличия copyright ссылки в футере", function (){
        cy.visit("https://m1ndhs.github.io/");
        cy.get(".copyright").contains("HTML5 UP");

    });
})
describe("Наличие copyright", function () {
    it("Проверка, правильное имя и фамилия", function (){
        cy.visit("https://m1ndhs.github.io/");
        cy.get("h1").contains("Александр Суханов");

    });
})
