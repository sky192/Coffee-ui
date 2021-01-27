import React from 'react'
import styled from 'styled-components'

const Coffee = styled.div `
font-size: 20px;
margin-bottom: 10px;
text-align: center;
`

export default ({ id, title, description }) => (
  <Coffee key={id}>
    {`${title}: (${description})`}
  </Coffee>
)
