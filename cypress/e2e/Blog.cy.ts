describe('Blog spec', () => {
    beforeEach(() => {
        cy.visit('/blog');
    });

    it('should navigate to blog post page according to an id', () => {
        cy.get('[data-cy=post-1]').click();
        cy.url().should('include', '/posts/1');
    });

    it('should open second page and navigate to the post with id=6', () => {
        cy.get('[data-cy=page-2]').click({ multiple: true });
        cy.get('[data-cy=post-6]').click();
        cy.url().should('include', '/posts/6');
    });

    it('should not navigate to another page if it is the last page', () => {
        cy.get('[data-cy=page-2]').click({ multiple: true });
        cy.get('[data-cy=next-page]').click({ multiple: true });
        cy.get('[data-cy=page-2]').and('have.css', 'color').should('include', 'rgb(109, 110, 118)');
    });
})