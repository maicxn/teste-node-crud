const express = require('express');

const res = require('express/lib/response');

const server = express();

server.use(express.json());

const jogos = ['The Last of Us' , 'Rainbow Six' ,  'League of Legend'];

// Retorna um jogo
server.get('/jogos/:index', (req, res) => {
    const {index} = req.params;
   
    return res.json(jogos[index])
});

// Retornar todos os jogos
server.get('/jogos', (_req, res) => {
    return res.json(jogos)
});

// Criar um novo jogo
server.post('/jogos', (req, res) => {
    const {name} = req.body;
    jogos.push(name)

    return res.json(jogos);

});

// Atualizar um jogo
server.put('/jogos/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    jogos[index] = name;
    return res.json(jogos);
});

// Deletar um jogo
server.delete('/jogos/:index', (req, res) => {
    const  {index} = req.params;

    jogos.splice(index, 1);
    return res.json({message: "O jogo foi deletado"});
});



server.listen(3000);