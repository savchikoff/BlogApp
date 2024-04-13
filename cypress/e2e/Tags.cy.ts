describe('Tags spec', () => {
	beforeEach(() => {
		cy.visit('/category/economy');
	});

	it('should display label that there is no posts with such category', () => {
		cy.get('[data-cy=tag-Life]').click();
		cy.get('[data-cy=no-posts-tags]').should('be.visible');
	});
});
