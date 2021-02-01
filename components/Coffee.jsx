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
  color: #220a00;
  font-size: 20px;
  font-weight: 500;
`

export default ({ id, title }) => (
  <Coffee key={id}>
    <Link to={`/coffee/${title}`}>{`${title}`}</Link>
  </Coffee>
)
