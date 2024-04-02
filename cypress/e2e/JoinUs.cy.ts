describe('Join Us spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about-us');
    });

    it('should navigate to contacts page', () => {
        cy.get('[data-cy=join-us]').click();
        cy.url().should('include', '/contacts');
    });
})