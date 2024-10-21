# Documentação do Projeto: Cadastro de Livros

## Índice

1. Descrição do Projeto

2. Tecnologias Utilizadas

3. Pré-requisitos

4. Estrutura do Projeto

5. Configuração do Banco de Dados

6. Configuração da AWS RDS

7. Configuração da AWS S3

8. Configuração do AWS Cognito

9. Diagrama de Fluxo de Dados

10. Diagrama de Classes

11. Prints do Projeto

12. Endpoints da API

13. Como Contribuir

14. Licença

## Descrição do Projeto

Este projeto é um aplicativo para cadastro de livros que permite que os usuários insiram informações sobre títulos, autores e imagens de capa. As imagens de capa são armazenadas na Amazon S3, e os dados dos livros são salvos em um banco de dados PostgreSQL hospedado no AWS RDS. O AWS Cognito é utilizado para gerenciar a autenticação dos usuários.

## Tecnologias Utilizadas

* Node.js: Ambiente de execução para JavaScript no servidor.
* Express.js: Framework para construção de APIs.
* PostgreSQL: Sistema de gerenciamento de banco de dados.
* AWS RDS: Serviço de banco de dados na nuvem.
* AWS S3: Armazenamento de objetos na nuvem.
* AWS Cognito: Serviço de gerenciamento de usuários e autenticação.
* EJS: Motor de template para renderização de páginas HTML.
* Bootstrap: Framework CSS para estilização.

## Pré-requisitos

* Node.js instalado.
* Conta na AWS com acesso ao RDS e S3.
* Conhecimentos básicos de JavaScript, git, SQL e configuração de AWS.

## Estrutura do Projeto

/cd-livros
├── /config
│   ├── awsConfig.js
│   ├── database.js
│   └── cognitoConfig.js
├── /controllers
│   └── bookController.js
├── /models
│   └── bookModel.js
├── /public
│   └── /css
│       └── styles.css
│   └── /screenshots
│       └── diagramas
├── /routes
│   └── bookRoutes.js
├── /views
│   ├── createBook.ejs
│   └── listBooks.ejs
├── app.js
└── package.json

Navegue até a estrutura do Projeto

cd cd-livros

## Configuração do Banco de Dados

1. Crie uma instância do Amazon RDS com PostgreSQL e obtenha as credenciais de acesso.
2. Crie uma instância do Amazon RDS com PostgreSQL e obtenha as credenciais de acesso.
3. Atente-se ao free tier da aws.
