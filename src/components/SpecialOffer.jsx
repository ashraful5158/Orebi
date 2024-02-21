/* eslint-disable no-unused-vars */
import React from 'react'
import specialoffer from "../assets/specialoffer.png";
import specialoffer2 from "../assets/specialoffer2.png";
import specialoffer3 from "../assets/specialoffer3.png";
import specialoffer4 from "../assets/specialoffer4.png";
import Title from "./layouts/Title";
import Flex from "./layouts/Flex";
import Container from "./layouts/Container";
import Product from './layouts/Product';

const SpecialOffer = () => {
  return (
   <section className='px-2 sm:px-0'>
       <Container>
      <Title title={"Special Offers"}  />
      <div>
      <Flex className={"mt-[48px] mb-[283px] gap-10 flex-col sm:flex-row "}>
       <Product productImg={specialoffer}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
       <Product productImg={specialoffer2}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
       <Product productImg={specialoffer3}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
       <Product productImg={specialoffer4}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
      </Flex>
    </div>
    </Container>
   </section>
  )
}

export default SpecialOffer