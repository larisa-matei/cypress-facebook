describe('Facebook login', () => {

  it('Open facebook', () => {
    cy.visit('https://facebook.com/')
  });

  it('Hide cookie tab info', () => {
    cy.get('[data-testid="cookie-policy-manage-dialog-accept-button"]').click({multiple: true});
  });

  it('Complete login form with empty data', () => {
    cy.get('[data-testid="royal_email"]').type('intesting');
    cy.get('[data-testid="royal_pass"]').type('intesting');
    cy.get('[data-testid="royal_login_button').should('contain', 'Conectează-te').click();
    cy.contains("Your Request Couldn't be Processed").should('exist');
  });

  it('Complete login form with valid data', () => {
    cy.get('[data-testid="royal_email"]').type('09999999');
    cy.get('[data-testid="royal_pass"]').type('testing{enter}');
    cy.get('.x78zum5 .x1n2onr6').click();
  });

  it('Logout', () => {
    cy.get('.x78zum5 .x1n2onr6').click();
    cy.get('.xu06os2 .x1ok221b').should('contain', 'Deconectare').click();
    cy.get('[data-testid="royal_login_button').should('contain', 'Conectează-te');
  });
});
