const express = require('express');
const App =express();
const PORT = 3001;

App.get('/', (req, res) => {
    res.send('');
})

App.listen(PORT, () => {
    console.log('Servidor Rodando na Porta --->' +PORT)
});