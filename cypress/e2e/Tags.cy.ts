describe('Tags spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/category/economy');
    });

    it('should display label that there is no posts with such category', () => {
        cy.get('[data-cy=tag-Life]').click();
        cy.get('[data-cy=no-posts-tags]').should('be.visible');
    });
})