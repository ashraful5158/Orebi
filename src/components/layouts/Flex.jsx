/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex