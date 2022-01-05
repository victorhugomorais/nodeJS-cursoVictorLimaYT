const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Pipoca006.', {
    host: "localhost",
    dialect: 'mysql'
})

//no sequelize, models são abstrações de tabelas

const Postagem = sequelize.define('postagens',{ //entre aspas no plural.
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true})
//como já criamos a tabela postagens, podemos comentar a linha que cria a tabela no mysql e podemos aprender agora como gerar registros via node + sequelize
Postagem.create({
    titulo: "primeiro post do blog",
    conteudo: " um texto lorem ipsum grandao aqui, imagina só"
})

const Usuario = sequelize.define('usuarios', { //entre aspas no plural.
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type : Sequelize.STRING
    },
    telefone: {
        type: Sequelize.INTEGER
    }
})

//Usuario.sync({force: true}) 
//como já criamos a tabela postagens, podemos comentar a linha que cria a tabela no mysql e podemos aprender agora como gerar registros via node + sequelize
Usuario.create({
    nome: "Victor",
    sobrenome: "Morais",
    idade: 23,
    email: "victormorais@id.uff.br",
    telefone: 2299861
})
