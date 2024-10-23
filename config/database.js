const { Pool } = require('pg');

const pool = new Pool({
    user: 'seu_usuario',
    host: 'seu_endpoint_rds.amazonaws.com',
    database: 'livros_db',
    password: 'sua_senha',
    port: 5432,
});

module.exports = pool;
