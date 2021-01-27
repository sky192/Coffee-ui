import React from 'react'
import styled from 'styled-components'

const Title = styled.div `
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 30px;
`
const Subtitle = styled.div `
  font-size: 20px;
  font-weight: 400;
`

export default () => (
  <>
    <Title>A searchable list of all your favorite coffees</Title>
    <Subtitle>choose the coffee</Subtitle>
  </>
)
