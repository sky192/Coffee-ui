/* eslint-disable import/prefer-default-export */
import fetchCoffees from '../actions/coffees'

export const filterCoffees = (list, term) => list.filter(coffee => (
  coffee.title.toLowerCase().includes(term.toLowerCase())
))

export const retrieveCoffees = async () => {
  const coffees = await fetchCoffees()

  return coffees
}
