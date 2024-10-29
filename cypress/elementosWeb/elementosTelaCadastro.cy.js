export class ElementosWeb {


    facaLogin() {
        return cy.get('#login_barra > a:nth-child(3)');
    }
    cpf() {
        return cy.get('#cpf');
    }
    nome() {
        return cy.get('#nome');
    }
    email() {
        return cy.get('#email');
    }
    sexo() {
        return cy.get('#sexo');
    }
    data() {
        return cy.get('#dataNascimento');
    }
    estado() {
        return cy.get('#estado');
    }
    cidade() {
        return cy.get('#cidadeEndereco');
    }
    cinema() {
        return cy.get('#cinemadogrupo');
    }
    dia() {
        return cy.get('#pergunta_8');
    }
    genero() {
        return cy.get('#tagator_activate_tagator2 > input');
    }
    frequencia() {
        return cy.get('#pergunta_6');
    }
    confirmar() {
        return cy.get('#submitKinefilo');
    }

}