const express = require('express')//importamos a a biblioteca express após instalarmos com npm install express --save
const app = express() // aqui estamos importando todas as funções do express para a constante app, logo usaremos a constante app para usar as funções do express

//nesta aula 13, começamos isntalando o sequelize com a linha de comando "npm install --save sequelize"
//e também o mysql2 "npm install --save mysql2"

app.get("/sendFile", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.listen(8081, function(){
    console.log("server ta on na url http://localhost:8081 http://localhost:8081/ola/:cargo/:nome ")
})