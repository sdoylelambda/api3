const express = require('express');
const server = express();

const productsRouter = require('../products/productsRouter');
const suppliersRouter = require('../suppliers/suppliersRouter')

// function uppercaser(req, res, next) {
//     const name = req.params.name;
//     if(name) {
//         req.name = name.toUpperCase();
//     }
//     res.send(`the name is: ${name}`), next();
// }

// server.use(uppercaser)
// server.use('/suppliers', uppercaser)
// global middleware
server.use(express.json());
server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'})
})

server.get('/clients', (req, res) => {
    res.status(200).json({ api: 'up'})
})


module.exports = server