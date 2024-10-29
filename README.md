Este repositório contém testes automatizados utilizando o Cypress.
Abaixo estão os comandos necessários para executar os testes.

Pré-requisitos
Node.js instalado
Dependências do projeto instaladas

                                Instalação: 
1- Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repositorio.git

cd nome-do-repositorio

2- Instale as dependências:
npm install

                            Executando os Testes:
Para rodar os testes em modo headless (sem interface gráfica), execute:

npx cypress run --spec 'caminho/para/seu/teste.spec.js'

Para abrir a interface gráfica do Cypress, execute:

npx cypress open


