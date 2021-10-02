import React from 'react'
import {Container} from './styled'
import {Bottom, Nav, Title} from '../../components/'
export const Header = () => {
  return (
    <Container>
      <Title title={'COVID 19'}/>
      <Nav li1={'test'} li2={'test'} li3={'test'} />
    </Container>
  )
}
