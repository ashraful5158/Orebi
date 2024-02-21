/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Img from './Img'

const SpecialOfferProduct = ({productImg, productName, showCategory, color, price, showBadge,badgeTitle}) => {
  return (
    <Container>
      <Flex>
        <div className='relative'>
          {showBadge && (<div className="absolute text-[14px] text-white bg-black px-8 py-2 font-bold top-[20px] left-[26px]">
         {badgeTitle}
        </div>)}
        <Img src={productImg}/> 
        
        <Flex className={"justify-between mt-[18px]"}>
        <h3 className="font-bold text-[20px] text-[#262626] ">
           {productName}
        </h3>
        <h6 className="text-base font-light text-[#767676]">{price}</h6>
      </Flex>
      {showCategory && <h5 className="font-dm text-[16px] font-light text-[#767676]">{color}</h5>}
        </div>
      </Flex>
    </Container>
  )
}

export default SpecialOfferProduct