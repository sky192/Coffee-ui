const Sequelize = require('sequelize')
// eslint-disable-next-line import/no-unresolved
const allConfigs = require('../config/sequelize')
const coffeeModel = require('./coffee')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Coffees = coffeeModel(connection, Sequelize)

module.exports = { Coffees, Op: Sequelize.Op }
