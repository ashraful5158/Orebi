/* eslint-disable no-unused-vars */
import React from 'react'
import Container from './Container'
import Img from './Img'
import bigsale from "../../assets/bigsale.png"

const BigSale = () => {
  return (
    <Container>
      <section className='my-[130px]'>
      <Img src={bigsale}/>
      </section>
    </Container>
  )
}

export default BigSale