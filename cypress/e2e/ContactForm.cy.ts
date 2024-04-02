describe('Contact Form spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contacts');
    });

    it('should send message to en email', () => {
        const nameInput = cy.get('[data-cy=name-input]');
        const emailInput = cy.get('[data-cy=email-input]');
        const querySelect = cy.get('[data-cy=query-select]');
        const textArea = cy.get('[data-cy=text-area]');
        const contactButton = cy.get('[data-cy=contact-button]');
        nameInput.type("Danik");
        emailInput.type("hello@mail.ru");
        querySelect.select("Startup");
        textArea.type("Hey, this is contact form test");
        contactButton.click();
        cy.wait(5000);

        nameInput.should('have.value', "");
        emailInput.should('have.value', "");
        textArea.should('have.value', "");
    });
})