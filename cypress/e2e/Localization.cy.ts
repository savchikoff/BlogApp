describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should change language to russian and english', () => {
    cy.get('[data-cy=locale-switcher]').select("ru");
    cy.url().should('include', '/ru');

    cy.get('[data-cy=locale-switcher]').select("en");
    cy.url().should('include', '/en');
  });
})