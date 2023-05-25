//Tratando Route Params
const express = require('express');
const server = express();
server.use(express.json())


//localhost:3000/Streamer/2 //Lista um unico Streamer
//localhost:3000/Streamer //Listatodos os Streamers
//localhost:3000/Streamer/2 //alterar um Streamer

const streamerslista = ['Alanzoka', 'Gaules', 'Michel',
    'Apoka','Xarola','Casimito','Yoda','Coreano','Tetew','Smzinho']

//Rota para listar um único Streamer
server.get('/Streamer/:indiceInput', (req, res) => {
    const { indiceInput } = req.params
    return res.json({
        Streamer: `O ID do STREAMER foi... ${streamerslista[indiceInput]}`
    })
})

//Rota para listar TODOS os Streamers
server.get('/Streamer', (req, res) => {
    return res.json(streamerslista);
})

//Rota para criar novo Streamer - POST - utilizar REQUST BODY
server.post('/Streamer', (req, res) => {
    const { nomeStreamer } = req.body;
    streamerslista.push(nomeStreamer);
    return res.json(streamerslista);
})

//Rota para alterar Streamer - PUT - será utilizado BODY
server.put('/Streamer/:indice', (req, res) => {
    const { indice } = req.params;
    const { nomeStreamer } = req.body;
    streamerslista[indice] = nomeStreamer;
    return res.json(streamerslista);
})

//Rota para deletar prato - DELETE -
server.delete('/Streamer/:indice', (req, res) => {
    const { indice } = req.params;
    streamerslista.splice(indice, 1);
    return res.json(streamerslista);
})


server.listen(3000);