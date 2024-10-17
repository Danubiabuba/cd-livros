const AWS = require('aws-sdk');
const { awsConfig, s3BucketName } = require('../config/awsConfig');
const bookModel = require('../models/bookModels');

// Configurando o AWS SDK com suas credenciais
AWS.config.update(awsConfig);
const s3 = new AWS.S3(); 

// Função para criar um novo livro
exports.createBook = async (req, res) => {
    const { titulo, autor } = req.body;
    const file = req.file;

    // Verifica se o arquivo foi enviado
    if (!file) {
        return res.status(400).send('Arquivo de imagem é obrigatório.');
    }

    const params = {
        Bucket: s3BucketName,
        Key: `books/${Date.now()}_${file.originalname}`, // Adicionando um nome único para o arquivo
        Body: file.buffer,
        ACL: 'public-read', // Permissão para leitura pública
        ContentType: file.mimetype // Adicionando tipo de conteúdo
    };

    try {
        // Enviando o arquivo para o S3
        const data = await s3.upload(params).promise();
        
        // Chamando o modelo para salvar no banco de dados
        await bookModel.createBook(titulo, autor, data.Location);

        res.redirect('/books'); // Redireciona para a lista de livros após o cadastro
    } catch (error) {
        console.error('Erro ao cadastrar livro:', error);
        res.status(500).send('Erro ao cadastrar livro');
    }
};

// Função para listar os livros
exports.listBooks = async (req, res) => {
    try {
        const books = await bookModel.getBooks();
        res.render('listBooks', { books });
    } catch (error) {
        console.error('Erro ao listar livros:', error);
        res.status(500).send('Erro ao listar livros');
    }
};
