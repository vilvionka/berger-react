describe('spec burger', () => {
  beforeEach(() => {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" }).as("postUser");
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");
    cy.visit('/');

    // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-accessToken")
    );
  });

  it("should drag bun", function () {
    cy.get("[data-cy=ingredient643d69a5c3f7b9001cfa093c]")
      .trigger("dragstart");
    cy.get("[data-cy=constructor]").trigger("drop");

    cy.get("[data-cy=submit]").click()
    

    cy.get("[data-cy=modal]")
      .should('be.visible')
    cy.get("[data-testid=order-number]").contains("123").should("exist");
    cy.get("[data-cy=close]").click()
    cy.contains("идентификатор заказа").should("not.exist")

    cy.get("[data-cy=ingredient643d69a5c3f7b9001cfa093c]").click()
    cy.get("[data-cy=modal]")
      .should('be.visible')
      cy.contains("Краторная булка N-200i").should("exist");
      cy.get("[data-cy=close]").click()
    cy.contains("Детали ингредиента").should("not.exist")
    
  })
  

})