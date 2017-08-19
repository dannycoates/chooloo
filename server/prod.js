const express = require('express')
const path = require('path')
const index = require('./routes')

const server = express()

server.use(express.static(path.resolve(__dirname, '../dist/')));

server.get('/', index)

server.listen(1443)
