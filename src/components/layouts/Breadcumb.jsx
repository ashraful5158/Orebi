/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import {FaAngleRight} from "react-icons/fa"

const Breadcumb = ({name, path, pathName}) => {
  return (
    <div className='font-dm'>
      <h1 className='font-bold text-[49px] text-[#262626] capitalize'>{name}</h1>
      <Flex className={"items-center gap-2"}>
        <Link to="/">Home</Link>
        <FaAngleRight/>
        <Link to={path}>{pathName}</Link>
      </Flex>
    </div>
  )
}

export default Breadcumb