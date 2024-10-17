const express = require('express');
const multer = require('multer');
const bookController = require('../controlllers/bookController');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Rota para renderizar o formulário de criação de livro
router.get('/create', (req, res) => res.render('createBook'));

// Rota para criar um novo livro
router.post('/create', upload.single('coverImage'), bookController.createBook);

// Rota para listar os livros
router.get('/', bookController.listBooks);

module.exports = router;
