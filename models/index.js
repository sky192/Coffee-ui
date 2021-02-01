import Sequelize from 'sequelize'

import allConfigs from '../configs/sequelize'

import coffeeModel from './coffee'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Coffees = coffeeModel(connection, Sequelize)

export default { Coffees, Op: Sequelize.Op }
