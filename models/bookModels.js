const pool = require('../config/database'); // Certifique-se de que o caminho para o banco de dados está correto

// Função para criar um novo livro no banco de dados
exports.createBook = async (titulo, autor, imageUrl) => {
    try {
        await pool.query(
            'INSERT INTO books (titulo, autor, image_url) VALUES ($1, $2, $3)',
            [titulo, autor, imageUrl]
        );
    } catch (error) {
        console.error('Erro ao inserir livro:', error);
        throw error; // Re-throw para que o controlador possa capturá-lo
    }
};
