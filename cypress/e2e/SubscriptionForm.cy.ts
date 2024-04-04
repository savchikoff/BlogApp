describe('Subscription Form spec', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send', (req) => {
            req.reply({
                statusCode: 200,
                body: 'Mocked response from emailJs'
            });
        }).as('emailJsRequest');
    });

    it('should send message to en email', () => {
        const emailInput = cy.get('[data-cy=footer-input]');
        const subscriptionButton = cy.get('[data-cy=subs-button]');

        emailInput.type("hello@mail.ru");
        subscriptionButton.click();
        cy.wait('@emailJsRequest');

        emailInput.should('have.value', "");
    });
})