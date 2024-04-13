describe('Navigation spec', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should show navigation on the screen', () => {
		cy.get('[data-cy=navigation]').should('be.visible');
	});

	it('should navigate to Blog Page', () => {
		cy.get('[data-cy=route-Blog]').click({ multiple: true });
		cy.wait(2000);
		cy.url().should('include', '/blog');
	});

	it('should navigate to About Page', () => {
		cy.get('[data-cy=route-About]').click({ multiple: true });
		cy.wait(2000);
		cy.url().should('include', '/about-us');
	});

	it('should navigate to Contact Page', () => {
		cy.get('[data-cy=route-Contacts]').click({ multiple: true });
		cy.wait(2000);
		cy.url().should('include', '/contacts');
	});
});
