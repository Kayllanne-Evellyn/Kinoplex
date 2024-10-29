/// <reference types="cypress" />


import { ElementosWeb } from "../elementosWeb/elementosTelaCadastro";


describe("Automação dos casos de testes da aba de cadastro", () => {


    let elementos = new ElementosWeb();


    it('Realizar novo cadastro', () => {

        cy.visit("https://www.kinoplex.com.br");
        cy.wait(4000);
        cy.get('#fechar').click();
        elementos.facaLogin().click();
        cy.contains('KINÉFILOS - CADASTRO').should('be.visible');
        elementos.cpf().type('445.083.670-70');
        elementos.nome().type('Teste Robô');
        elementos.email().type('testerobo@gmail.com');
        elementos.sexo().select('Feminino');
        elementos.data().type('04062000')
        elementos.estado().select('São Paulo');
        elementos.cidade().select('Osasco');
        elementos.cinema().select('Kinoplex Boa Vista');
        elementos.dia().click();
        cy.get('#tagator_activate_tagator2 > input')
            .click();
        cy.contains('ANIMAÇÃO')
            .click();
        elementos.frequencia().select('Uma vez por semana');
        elementos.confirmar().click();

    })

    it('Realizar cadastro com CPF incompleto', () => {

        cy.visit("https://www.kinoplex.com.br");
        cy.wait(4000);
        cy.get('#fechar').click();
        elementos.facaLogin().click();
        cy.contains('KINÉFILOS - CADASTRO').should('be.visible');
        elementos.cpf().type('445.083');
        cy.contains('Formato inválido').should('be.visible');

    })

    it('Realizar cadastro com e-mail inválido', () => {

        cy.visit("https://www.kinoplex.com.br");
        cy.wait(4000);
        cy.get('#fechar').click();
        elementos.facaLogin().click();
        cy.contains('KINÉFILOS - CADASTRO').should('be.visible');
        elementos.email().type('teste.com');
        cy.contains('Inclua um "@" no endereço de e-mail. "teste.com" está com um "@" faltando.').should('be.visible');


    })

    it.only('Realizar cadastro com data de nascimento no formato inválido', () => {

        cy.visit("https://www.kinoplex.com.br");
        cy.wait(4000);
        cy.get('#fechar').click();
        elementos.facaLogin().click();
        cy.contains('KINÉFILOS - CADASTRO').should('be.visible');
        elementos.data().type('2');
        cy.contains('Formato de data inválido').should('be.visible');


    })

})