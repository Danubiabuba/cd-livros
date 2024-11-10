// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define a rota GET para /books
router.get('/books', bookController.getBooks);

// Nova rota para pesquisar livro pelo ISBN
router.get('/books/isbn/:isbn', bookController.searchBookByIsbn);

module.exports = router;
