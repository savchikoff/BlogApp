describe('Subscription Form spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should send message to en email', () => {
        const emailInput = cy.get('[data-cy=footer-input]');
        const subscriptionButton = cy.get('[data-cy=subs-button]');

        emailInput.type("hello@mail.ru");
        subscriptionButton.click();
        cy.wait(5000);

        emailInput.should('have.value', "");
    });
})