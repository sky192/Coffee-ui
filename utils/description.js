import fetchDescriptionForCoffee from '../actions/description'

export const getCoffeeIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/').pop()
  : 0

)

export const retrieveCoffees = async (location) => {
  const coffeeId = getCoffeeIdFromUrl(location)

  if (!coffeeId) return { id: 0, description: '', title: '' }

  const { id, title, description } = await fetchDescriptionForCoffee(coffeeId)

  if (!id || !title || !description) return { id: 0, description: '', title: '' }

  return { id, description, title }
}
