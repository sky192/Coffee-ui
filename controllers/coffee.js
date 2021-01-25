/* eslint-disable no-undef */

const models = require('../models')

const getAllCoffees = async (request, response) => {
  const coffees = await models.Coffees.findAll({})

  return response.send(coffees)
}

const getCoffeeByTitle = async (request, response) => {
  try {
    const { title } = request.params

    const foundCoffee = await models.Coffees.findOne({
      where: { title: { [models.Op.like]: `%${title}%` } },

    })

    return foundCoffee
      ? response.send(foundCoffee)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve coffee, please try again')
  }
}

const saveNewCoffee = async (request, response) => {
  const { title, description } = request.body

  if (!title || !description) {
    return response.status(400).send('The following fields are required: title, description')
  }

  const newCoffee = await models.Coffees.create({ title, description })

  return response.status(201).send(newCoffee)
}

const deleteCoffee = async (request, response) => {
  try {
    // eslint-disable-next-line radix
    const id = parseInt(request.params.id)
    const coffee = await models.Coffee.findOne({ where: { id } })

    if (!coffee) return response.status(404).send(`Unknown animal with ID: ${id}`)

    await models.Coffees.destroy({ where: { id } })

    return response.send(`Successfully deleted the coffee with ID: ${id}`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting coffee')
  }
}

module.exports = { getAllCoffees, getCoffeeByTitle, saveNewCoffee, deleteCoffee }
