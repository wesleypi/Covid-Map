import React from 'react'
import {Container } from './styles'
export const Nav = ({li1, li2, li3}) => {
  return (
    <Container>
      <ul>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
      </ul>
    </Container>
  )
}
