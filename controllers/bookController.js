// controllers/bookController.js
const Book = require('../models/Book');

// retorna todos os livros
exports.getBooks = (req, res) => {
    try {
        // Chama a função do modelo para obter livros simulados
        const books = Book.getMockBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter os livros', error });
    }
};

// Nova função para buscar livro por ISBN
exports.searchBookByIsbn = (req, res) => {
    try {
        const { isbn } = req.params; // Obtém o ISBN da URL

        // Chama a função para obter todos os livros
        const books = Book.getMockBooks();

        // Filtra os livros para encontrar um com o ISBN exato
        const book = books.find(b => b.isbn === isbn);

        // Se o livro não for encontrado
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Retorna o livro encontrado
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livro por ISBN', error });
    }
};
