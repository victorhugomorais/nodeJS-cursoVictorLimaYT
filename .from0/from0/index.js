const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")

const app = express()
const Usuario = require("./models/Usuario")

        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
        
        app.use(express.urlencoded({extended:false}))
        app.use(express.json())

        app.get("/cad", function(req, res){ 
            res.render('formulario')
        }) 
        
        app.post("/add", function(req, res){
            Usuario.create({
                nome: req.body.nome,
                idade: req.body.idade
            }).then(function(){
                res.redirect("/home")
                //res.send("post criado com sucesso")
            }).catch(function(erro){
                res.send("houve um erro: " + erro)
            })
        })

        app.get("/home", function(req,res){
            res.render("home")
        })

app.listen(8082, function(){
console.log("server ta on na url http://localhost:8082/cad ")
})