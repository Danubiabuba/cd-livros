// routes/authRoutes.js
const express = require('express');
const Auth = require('../config/awsConfig'); // Importando o arquivo de configuração
const router = express.Router();

// Rota para renderizar a página de cadastro
router.get('/register', (req, res) => {
    res.render('register');
});

// Rota para processar o cadastro
router.post('/register', (req, res) => {
    const { email, password } = req.body;

    Auth.signUp(email, password)
    .then(() => {
        res.redirect('/auth/login'); // Redireciona para a página de login após o cadastro
    })
    .catch(err => {
        console.error('Erro ao cadastrar:', err);
        res.status(400).send('Erro ao cadastrar');
    });
});

// Rota para renderizar a página de login
router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
});

// Rota para processar o login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    Auth.signIn(email, password)
    .then(user => {
        console.log('Login bem-sucedido:', user);
        res.redirect('/'); // Redireciona para a página inicial ou perfil
    })
    .catch(err => {
        console.error('Erro ao logar:', err);
        res.status(400).send('Erro ao logar');
    });
});

// Rota para renderizar a página de recuperação de senha
router.get('/forgot-password', (req, res) => {
    res.render('forgot-password');
});

// Rota para processar a solicitação de recuperação de senha
router.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    Auth.forgotPassword(email)
    .then(() => {
        res.send('Um e-mail de recuperação foi enviado.');
    })
    .catch(err => {
        console.error('Erro ao solicitar recuperação de senha:', err);
        res.status(400).send('Erro ao solicitar recuperação de senha');
    });
});

module.exports = router;
