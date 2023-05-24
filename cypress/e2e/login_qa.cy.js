describe("Тестирование авторизации", function() {
    it("Проверка, при правильном логине и пароле отображается сообщение об успешной авторизации", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("german@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("Авторизация прошла успешно");
        cy.get("#exitMessageButton");
    })
    it("Проверка, восстановление пароля", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type("example@example.com");
        cy.get("#restoreEmailButton").click();
        cy.contains("Успешно отправили пароль на e-mail");
        cy.get("#exitMessageButton");        
    });
    it("Проверка, неправильный пароль", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("german@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio");
        cy.get("#loginButton").click();
        cy.contains("Такого логина или пароля нет");
        cy.get("#exitMessageButton");
    })
    it("Проверка, неправильный логин", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("erman@dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("Такого логина или пароля нет");
        cy.get("#exitMessageButton");
    })
    it("Проверка, валидация поля email", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("germandolnikov.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("Нужно исправить проблему валидации");
    })
    it("Проверка, приведение к строчным буквам в логине", function() {
        cy.visit("https://login.qa.studio/");
        cy.get("#mail").type("GerMan@Dolnikov.ru");
        cy.get("#pass").type("iLoveqastudio1");
        cy.get("#loginButton").click();
        cy.contains("Авторизация прошла успешно");
        cy.get("#exitMessageButton");
    })
})