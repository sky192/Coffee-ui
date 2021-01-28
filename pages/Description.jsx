import React, { useEffect, useState } from 'react'
import Descript from '../components/Descript'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import CoffeeDetails from '../components/CoffeeDetails'
import Title from '../components/Title'
import { retrieveDescription } from '../utils/description'

export default ({ location }) => {
  const [coffeeDescription, setCoffeeDescription] = useState('')
  const [coffee, setCoffee] = useState({})
  const [descriptionList, setDescriptionList] = useState({})

  useEffect(() => {
    async function pullData() {
      const { details, description } = await retrieveDescription(location)

      setCoffeeDescription(details.description)
      setCoffee(details)
      setDescriptionList(description)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        coffeeDescription
          ? (
            <>
              <CoffeeDetails Title={coffee.title} description={coffee.description} />
              {descriptionList.map(descript => (
                <Descript
                  key={descript.id}
                  id={descript.description}
                />

              ))}
            </>
          )
          : (<NotFound message="Sorry, I do not know that team" />)

      }
    </Page>
  )
}
