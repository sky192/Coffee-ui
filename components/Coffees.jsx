/* eslint-disable max-len */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './Search'
import Coffee from './Coffee'

export default () => {
  const [coffeeList, setCoffeeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://http://localhost:1337/api/coffee')

      setCoffeeList(data)
    }

    pullData()
  }, [])

  return (
    <div className="page">
      <div className="title">Choose the Coffees</div>
      <div className="subtitle">A searchable list of all your favorite coffees</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {

        coffeeList.map(coffee => (<Coffee key={coffee.id} id={coffee.id} title={coffee.title} description={coffee.description} />))
      }

    </div>

  )
}
