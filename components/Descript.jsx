import React from 'react'
import styled from 'styled-components'

const Descript = styled.div `
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`

export default ({ id, description }) => (
  <Descript key={id}>
    {`${description}`}
  </Descript>
)
