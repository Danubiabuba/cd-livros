// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: { type: String, required: true},
    title: { type: String, required: true },
    author: { type: String, required: true },
    coverImageUrl: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Função estática para retornar dados simulados
bookSchema.statics.getMockBooks = function() {
    return [
        {
            "isbn": "978-3-16-148410-0",
            "title": "Aventuras no Espaço",
            "author": "João Silva",
            "coverImageUrl": "https://example.com/imagens/capa-aventuras.jpg",
            "createdAt": "2024-11-10T10:30:00.000Z"
        },
        {
            "isbn": "978-3-17-148410-0",
            "title": "Mistérios do Oceano",
            "author": "Maria Oliveira",
            "coverImageUrl": "https://example.com/imagens/capa-misterios.jpg",
            "createdAt": "2024-10-01T14:15:00.000Z"
        },
        {
            "isbn": "978-3-18-148410-0",
            "title": "Histórias Antigas",
            "author": "Carlos Pereira",
            "coverImageUrl": "https://example.com/imagens/capa-historias.jpg",
            "createdAt": "2024-09-15T08:00:00.000Z"
        }
    ];
};

module.exports = mongoose.model('Book', bookSchema);
