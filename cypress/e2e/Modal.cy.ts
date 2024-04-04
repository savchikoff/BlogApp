describe('Contact Form spec', () => {
    beforeEach(() => {
        cy.visit('/contacts');
    });

    it('should open modal window', () => {
        cy.get('[data-cy=modal-btn]').click();
        cy.get('[data-cy=modal-window]').should('be.visible');
    });

    it('should close modal window', () => {
        cy.get('[data-cy=modal-btn]').click();
        cy.get('[data-cy=modal-window]').should('be.visible');
        cy.get('[data-cy=modal-close-btn]').click();
        cy.get('[data-cy=modal-window]').should('not.exist');
    });
})