export default (connection, Sequelize) => connection.define('coffees', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, unique: true },
  description: { type: Sequelize.STRING },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, { paranoid: true })
