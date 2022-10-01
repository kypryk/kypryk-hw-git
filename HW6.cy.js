//для того щоб з'явився автокомпліт для команд сайпрес
/// <reference types="cypress"/>

const params = [
    {value: ['Oliver', 'oli@gmail.com'], expected: ['Oliver', 'oli@gmail.com']},
    {value: ['John', 'john@gmail.com'], expected: ['John', 'john@gmail.com']},
    {value: ['Lilly', 'lilly@gmail.com'], expected: ['Lilly', 'lilly@gmail.com']},
]

params.forEach(({value, expected}) => {
    it(`Entering ${value} to the Inline Form`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        //обираємо першу лайт тему, відкриваємо Forms -> Forms Layouts
        cy.get('nb-card-header').first().click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        //заповнюємо форму
        cy.get('[placeholder="Jane Doe"]').clear().type(value[0]);
        cy.get('[placeholder="Jane Doe"]').should('contain.value', expected[0]);
        cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"] > [placeholder="Email"]').clear().type(value[1]);
        cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"] > [placeholder="Email"]').should('contain.value', expected[1]);
        cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"] [class="custom-checkbox"]').click();
        cy.get('[class="form-inline ng-untouched ng-pristine ng-valid"] [nbbutton]').click();
    })
})

    