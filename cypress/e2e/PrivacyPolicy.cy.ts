describe('Privacy Policy spec', () => {
  beforeEach(() => {
    cy.visit('/privacy');
  });

  it('should open Privacy Policy Page in browser', () => {
    cy.visit('/privacy');
  });

  it('should display all the elements of Privacy Policy Page', () => {
    cy.get('[data-cy=header]').should('be.visible');
    cy.get('[data-cy=privacy-header]').should('be.visible');
    cy.get('[data-cy=privacy-content]').should('be.visible');
    cy.get('[data-cy=footer]').should('be.visible');
  });
})