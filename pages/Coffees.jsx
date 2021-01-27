import React, { useEffect, useState } from 'react'
import Coffee from '../components/Coffee'
import Search from '../components/Search'
import Title from '../components/Title'
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
      <Title />
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
