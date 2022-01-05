const db = require("./db")

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    idade: {

        type: db.Sequelize.INTEGER
    }
})

//Usuario.sync({force: true})

module.exports = Usuario