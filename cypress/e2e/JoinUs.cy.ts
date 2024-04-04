describe('Join Us spec', () => {
    beforeEach(() => {
        cy.visit('/about-us');
    });

    it('should navigate to contacts page', () => {
        cy.get('[data-cy=join-us]').click();
        cy.url().should('include', '/contacts');
    });
})