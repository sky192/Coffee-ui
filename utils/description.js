import fetchDescriptionForCoffee from '../actions/coffees'

export const getCoffeeDescriptionFromUrl = location => (location && location.pathname
  ? location.pathname.split('/description').pop()
  : ''

)

export const retrieveDescription = async (location) => {
  const coffeeDescription = getCoffeeDescriptionFromUrl(location)

  if (!coffeeDescription) return { details: {}, description: {} }

  const { id, title, description } = await fetchDescriptionForCoffee(coffeeDescription)

  if (!id || !title || !description) return { details: {}, description: {} }

  return { description, details: { id, title, description } }
}
