const express = require('express');
const multer = require('multer');
const bookController = require('../controllers/bookController');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const { body } = require('express-validator');


// Rota para renderizar o formulário de criação de livro
router.get('/create', (req, res) => {
    res.render('createBook')
});

// Rota para criar um novo livro
router.post('/create',
    upload.single('coverImage'),
    [
        body('title').notEmpty().withMessage('Título é obrigatório.'),
        body('author').notEmpty().withMessage('Autor é obrigatório.')
    ],
    bookController.createBook
);

// Rota para listar os livros
router.get('/', bookController.listBooks);

module.exports = router;
