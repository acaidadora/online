// app.js

const express = require('express');
const { exec } = require('child_process');
const app = express();

// Rota para verificar o status do IP
app.get('/status/:ip', (req, res) => {
    const ip = req.params.ip;
    exec(`ping -c 1 ${ip}`, (error, stdout, stderr) => {
        if (error) {
            res.send({ online: false });
        } else {
            res.send({ online: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
