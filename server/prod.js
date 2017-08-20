const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist/')));

routes(app)

app.listen(1443)
