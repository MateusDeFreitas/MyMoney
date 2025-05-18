//importando bibliotacas
const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');


//iniciando express
const app = express()

//classificando os arquivos da pasta 'arqEstaticos' como estáticos (não precisam ser requisitados individualmente)
app.use('/Recursos', express.static(path.join(__dirname, 'Recursos')));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));


// Define o tempo máximo de cache das imagens para um dia
app.use('/Recursos', express.static(path.join(__dirname, 'public/Recursos'), {
    maxAge: '1d' // Define o tempo máximo de cache para um dia
}));

//criação das rotas (End-Points)

app.get('/Principal', (req,res) => {
    fs.readFile(path.join(__dirname, 'Principal.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/Cadastro', (req,res) => {
    fs.readFile(path.join(__dirname, 'Cadastro.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/Contato', (req,res) => {
    fs.readFile(path.join(__dirname, 'Contato.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/', (req,res) => {
    fs.readFile(path.join(__dirname, 'Login.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro no servidor: ' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/SobreNos', (req, res) => {
    fs.readFile(path.join(__dirname, 'sobreNos.html'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro interno do servidor' + err);
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});


// Configuração do server
const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
})