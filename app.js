const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes.js');
const AWS = require('aws-sdk'); // Adiciona o AWS SDK
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

// Configurar o AWS Cognito
AWS.config.region = 'REGIÃO_DO_SEU_USER_POOL'; // ex: 'us-east-1'
const cognito = new AWS.CognitoIdentityServiceProvider();

// Rota para exibir o formulário de cadastro
app.get('/register', (req, res) => {
    res.render('register'); // Renderiza a página de registro
});

// Rota para processar o cadastro
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    const params = {
        ClientId: process.env.COGNITO_APP_CLIENT_ID, // ID do cliente da aplicação no Cognito
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email,
            },
        ],
    };

    cognito.signUp(params, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao cadastrar usuário');
        }
        res.send('Usuário cadastrado com sucesso!');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

// Exemplo de uso das variáveis
const awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
const awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = process.env.S3_BUCKET_NAME;

console.log(`Access Key: ${awsAccessKey}`);
console.log(`Secret Key: ${awsSecretKey}`);
console.log(`Bucket Name: ${bucketName}`);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});
