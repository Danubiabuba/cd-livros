// app.js
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json()); // Middleware para interpretar JSON

// Usa as rotas de livros
app.use('/', bookRoutes);

// Inicializar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
