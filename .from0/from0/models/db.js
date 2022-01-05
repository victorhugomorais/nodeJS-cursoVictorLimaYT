const Sequelize = require('sequelize')
const sequelize = new Sequelize('userapp', 'root', 'Pipoca006.',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}