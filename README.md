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

 /config

    awsConfig.js
    database.js
    cognitoConfig.js

 /controllers

     bookController.js

 /models

    bookModel.js

 /public

    /css
        styles.css

/routes

    bookRoutes.js

/views

    createBook.ejs
    listBooks.ejs

 app.js

 package.json

## Configuração do Banco de Dados

1. Crie uma instância do Amazon RDS com PostgreSQL e obtenha as credenciais de acesso.
2. Crie uma instância do Amazon RDS com PostgreSQL e obtenha as credenciais de acesso.
3. Atente-se ao free tier da aws.


javascript

    const { Pool } = require('pg');

    const pool = new Pool({
        user: 'seu_usuario',
        host: 'seu_endpoint_rds.amazonaws.com',
        database: 'livros_db',
        password: 'sua_senha',
        port: 5432,
    });

    module.exports = pool;

## Configuração da AWS RDS

1. Acesse o console da AWS e crie uma instância do RDS para PostgreSQL, ou banco de sua preferência.

2. Defina as configurações de segurança e conectividade para permitir acesso ao banco de dados.

## Configuração da AWS S3

1. Crie um bucket no S3 para armazenar as imagens de capa dos livros.
2. Configure a conexão ao S3 em config/awsConfig.js:

javascript


    const AWS = require('aws-sdk');

    const s3 = new AWS.S3({
        accessKeyId: 'SUA_ACCESS_KEY_ID',
        secretAccessKey: 'SUA_SECRET_ACCESS_KEY',
        region: 'SUA_REGIÃO',
    });

    module.exports = s3;

## Configuração do AWS Cognito

1.	Acesse o console do AWS Cognito e crie um novo grupo de usuários.

2.	Configure os detalhes de autenticação e obtenha as credenciais necessárias.

3.	Configure a autenticação no seu aplicativo em config/cognitoConfig.js:

javascript

    const AWS = require('aws-sdk');

    const cognito = new AWS.CognitoIdentityServiceProvider();

    const poolData = {
        UserPoolId: 'SEU_USER_POOL_ID', // seu user pool id
        ClientId: 'SEU_CLIENT_ID', // seu client id
    };

    const userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    module.exports = userPool;

## Diagrama de Fluxo de Dados

Descreva brevemente o que este diagrama representa e como os dados fluem entre os componentes do sistema.
## Diagrama de Classes

Descreva brevemente o que este diagrama representa e como as classes interagem entre si.
## Prints do Projeto

Coloque os prints do seu projeto na pasta public ou em um diretório específico, como public/screenshots/, e faça referência a eles aqui.

## Página de Criação de Livro

Descrição da funcionalidade desta página e como os usuários interagem com ela.

## Lista de Livros

Descrição do que os usuários podem fazer nesta página e como a listagem é apresentada.

## Endpoints da API

 1. *Criar Livro*
-URL: /books/create
-Método: POST

        •Corpo da Requisição:
        json
            {
                "title": "Título do Livro",
                "author": "Autor do Livro",
                "coverImage": "URL da Imagem de Capa"
            }

        •Resposta:
        json
        Copiar código
        {
            "id": 1,
            "title": "Título do Livro",
            "author": "Autor do Livro",
            "coverImage": "URL da Imagem de Capa"
        }
*2. Listar Livros*
    -	URL: /books
    -	Método: GET

    •	Resposta:
    json

    [
        {
            "id": 1,
            "title": "Título do Livro",
            "author": "Autor do Livro",
            "cover_image": "URL da Imagem de Capa",
            "created_at": "2024-10-21 12:34:56"
        }


##Como Contribuir

1.	Faça um fork do repositório.

2.	Crie uma nova branch para suas alterações:

        git checkout -b sua-feature

3.	Faça suas alterações e faça commit:

        git commit -m "Descrição das alterações"

4.	Envie para o repositório remoto:

        git push origin sua-feature

5.	Abra um Pull Request.

## Autor

Este projeto foi desenvolvido por [Danubia](https://github.com/Danubiabuba)

## Licença
Este projeto está sob a licença.

[MIT](LICENSE)

