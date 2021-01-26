import React, { useEffect, useState } from 'react'
import Coffee from './Coffee'
import Search from './Search'
import { filterCoffees, retrieveCoffees } from '../utils/coffees'

export default () => {
  const [coffeeList, setCoffeeList] = useState([])
  const [filteredCoffeeList, setFilteredCoffeeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const coffees = await retrieveCoffees()

      setCoffeeList(coffees)
      setFilteredCoffeeList(coffees)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterCoffees(coffeeList, searchTerm)

    setFilteredCoffeeList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Choose the Coffees</div>
      <div className="subtitle">A searchable list of all your favorite coffees</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {

        filteredCoffeeList.map(coffee => (
          <Coffee
            key={coffee.id}
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
          />
        ))
      }

    </div>

  )
}
