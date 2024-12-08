const express = require('express')
const livroRouter = require('./routers/livroRouter.js')

const app = express()

app.use(express.json())
app.use('/livros', livroRouter)

module.exports = app