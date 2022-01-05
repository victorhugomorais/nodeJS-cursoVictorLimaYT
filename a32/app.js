// Carregando módulos
    const express = require('express')
    const { engine } = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require("./routes/admin")
    // const mongoose = require('mongoose')

// Configurações
    // bodyParser 
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    // handlebars
        app.engine('handlebars', engine({ extname: 'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }))
        app.set('view engine', 'handlebars')
    // mongoose
        // em breve

// Rotas
    app.get("/", (req, res) => {
        res.send("Rota principal")
    })

    app.get("/posts", (req, res) => {
        res.send("Lista de posts")
    })

    app.use('/admin', admin)

// Outros
const PORT = 8083
app.listen(PORT, () => {
    console.log("Servidor rodando em https://localhost/8083/  ")
})