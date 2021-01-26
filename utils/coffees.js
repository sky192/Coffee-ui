/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const filterCoffees = (list, term) => list.filter(coffee => (
  coffee.title.toLowerCase().includes(term.toLowerCase())
))

export const retrieveCoffees = async () => {
  const { data } = await axios.get('http://localhost:1337/api/coffee')

  return data
}
