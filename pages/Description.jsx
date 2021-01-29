import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import CoffeeDetails from '../components/CoffeeDetails'
import { retrieveCoffees } from '../utils/description'

export default ({ location }) => {
  const [coffeeId, setCoffeeId] = useState('')
  const [coffeeTitle, setCoffeeTitle] = useState({})
  const [coffeeDescription, setCoffeeDescription] = useState([])

  useEffect(() => {
    async function pullData() {
      const { id, title, description } = await retrieveCoffees(location)

      setCoffeeId(id)
      setCoffeeTitle(title)
      setCoffeeDescription(description)
    }

    pullData()
  }, [])

  return (
    <Page>
      <GoBack />

      {
        coffeeId
          ? (
            <>
              <CoffeeDetails title={coffeeTitle} description={coffeeDescription} />
            </>
          )
          : (<NotFound message="Sorry, I do not know that coffee" />)

      }
    </Page>
  )
}
