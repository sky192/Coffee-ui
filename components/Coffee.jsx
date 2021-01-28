import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Coffee = styled.div `
font-size: 20px;
margin-bottom: 10px;
text-align: center;
`

const Link = styled(NavLink) `
  text-decoration: none;
  color: #9b5400;
  font-family: Arial, Helvetica, sans-serif;
`

export default ({ id, title, description }) => (
  <Coffee key={id}>
    <Link to={`/description/${description}`}>{`${title}:  (${description})`}</Link>
  </Coffee>
)
