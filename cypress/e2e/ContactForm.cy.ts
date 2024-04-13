describe('Contact Form spec', () => {
	beforeEach(() => {
		cy.visit('/contacts');

		cy.intercept(
			'POST',
			'https://api.emailjs.com/api/v1.0/email/send',
			(req) => {
				req.reply({
					statusCode: 200,
					body: 'Mocked response from emailJs',
				});
			}
		).as('emailJsRequest');
	});

	it('should send message to an email', () => {
		const nameInput = cy.get('[data-cy=name-input]');
		const emailInput = cy.get('[data-cy=email-input]');
		const querySelect = cy.get('[data-cy=query-select]');
		const textArea = cy.get('[data-cy=text-area]');
		const contactButton = cy.get('[data-cy=contact-button]');
		nameInput.type('Danik');
		emailInput.type('hello@mail.ru');
		querySelect.select('Startup');
		textArea.type('Hey, this is contact form test');
		contactButton.click();
		cy.wait('@emailJsRequest');

		nameInput.should('have.value', '');
		emailInput.should('have.value', '');
		textArea.should('have.value', '');
	});
});
