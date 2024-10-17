const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

// src/app.js
require('dotenv').config();

const awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
const awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = process.env.S3_BUCKET_NAME;

// Exemplo de uso das variáveis
console.log(`Access Key: ${awsAccessKey}`);
console.log(`Secret Key: ${awsSecretKey}`);
console.log(`Bucket Name: ${bucketName}`);
