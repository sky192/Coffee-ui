import React from 'react'
import styled from 'styled-components'

const Page = styled.div `
background-color: #755429;
    margin: 60px auto 0;
    text-align: center;
    width: 60%;
    `

export default ({ children }) => (
  <Page>{children}</Page>
)
