const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Pipoca006.', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro)
})