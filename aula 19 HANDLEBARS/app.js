const express = require('express')//importamos a a biblioteca express após instalarmos com npm install express --save
const app = express() // aqui estamos importando todas as funções do express para a constante app, logo usaremos a constante app para usar as funções do express

//nesta aula instalamos o handlebars com o comando "npm install --save express-handlebars"
//chamando o handlebars pro nosso projeto, após instala-lo
const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

//config
    //template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
        //com estas duas linhas estamos falando pro express que queremos usar o handlebars como o template engine do nosso projeto
        //agora criamos a pasta "views" no diretório do projeto, e "layouts" dentro, e "main.handlebars" dentro -> que será nosso layout padrão chamado "main", como foi definido na linha acima

        //body-parser
        app.use(express.urlencoded({extended:false}))
        app.use(express.json())

        //conexao com banco de dados
            const Sequelize = require('sequelize')
            const sequelize = new Sequelize('teste', 'root', 'Pipoca006.', {
                host: "localhost",
                dialect: 'mysql'
            })
                //fim da aula 19


//inicio da aula 20
            app.get("/cad", function(req, res){ 
                res.render('formulario')
            }) //usamos o res.render para que a URL localhost:8081/cad chame o arquivo formulario criado no diretório "views", que é nosso diretorio de templates do handlebars(html)

            app.post("/add", function(req, res){
                res.send("titulo: " +req.body.titulo + " conteudo: " + req.body.conteudo)
            })

            //fim aula 21

//inicio aula 22 body-parser
//npm install --save body-parser e importar com require lá em cima e configurar nas config logo abaixa das requires.




app.listen(8081, function(){
    console.log("server ta on na url http://localhost:8081 http://localhost:8081/ola/:cargo/:nome ")
})