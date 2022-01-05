const express = require('express')//importamos a a biblioteca express após instalarmos com npm install express --save
const app = express() // aqui estamos importando todas as funções do express para a constante app, logo usaremos a constante app para usar as funções do express

//com express, abrimos um servidor com uma linha, veja só:
//app.listen(8081)
//porém ela deve ser a última linha do nosso código!

app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu app! ")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre ")
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog ")
})

app.listen(8081, function(){
    console.log("server ta on na url http://localhost:8081")
})