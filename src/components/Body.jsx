/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import Ad_1 from "../assets/Ad_1.png";
import Ad_2 from "../assets/Ad_2.png";
import Ad_3 from "../assets/Ad_3.png";

const Body = () => {
  return (
   <section> <Container>
   <Flex className="lg:mt-[174px] mt-[50px] mb-[128px] px-2">
     <div>
       <img src={Ad_1} />
     </div>
     <div className="lg:ml-[40px] ml-[30px]">
       <img src={Ad_2} />
       <img
         src={Ad_3}
         className="lg:mt-[22px] md:mt-[16px] sm:mt-[16px] mt-[8px] cs:mt-[38px] "
       />
     </div>
   </Flex>
 </Container></section>
  );
};

export default Body;
