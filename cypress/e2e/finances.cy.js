
it('Excluir transação', () => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
    cy.contains("Nova Transação").click()
    cy.get('#description').type("Freela")
    cy.get('#amount').type(100)
    cy.get('#date').type("2023-05-05")
    cy.contains('button', 'Salvar').click()

    cy.contains(".description", "Freela")
    .parent()
    .find("img")
    .click()
    
});

