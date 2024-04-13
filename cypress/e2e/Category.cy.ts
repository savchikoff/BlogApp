describe('Category spec', () => {
	beforeEach(() => {
		cy.visit('/blog');
	});

	it('should navigate to business category page', () => {
		cy.get('[data-cy=category-Business]').click();
		cy.url().should('include', '/category/business');
	});

	it('should navigate to startup category page', () => {
		cy.get('[data-cy=category-Startup]').click();
		cy.url().should('include', '/category/startup');
	});

	it('should navigate to economy category page', () => {
		cy.get('[data-cy=category-Economy]').click();
		cy.url().should('include', '/category/economy');
	});

	it('should navigate to technology category page', () => {
		cy.get('[data-cy=category-Economy]').click();
		cy.url().should('include', '/category/economy');
	});

	it('should display banner with no category error', () => {
		cy.visit('http://localhost:3000/category/hello');
		cy.get('[data-cy=no-category]').should('be.visible');
	});
});
