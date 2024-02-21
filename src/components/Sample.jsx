/* eslint-disable no-unused-vars */
import React from "react";
import sample from "../assets/sample.png";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import sample4 from "../assets/sample4.png";
import Flex from "./layouts/Flex";
import Container from "./layouts/Container";
import Product from "./layouts/Product";

const Sample = () => {
  return (
    <Container>
      <div>
      <Flex className={"gap-10 flex-col sm:flex-row px-2 sm:px-0"}>
        <Product productImg={sample}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
        <Product productImg={sample2}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
        <Product productImg={sample3}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
        <Product productImg={sample4}
          showBadge={true}
          badgeTitle={"20%"}
          productName={"Basic Crew Neck Tee"}
          color={"Black"}
          price={"$44.00"}
          showCategory={true}/>
        
      </Flex>
    </div>
    </Container>
  );
};

export default Sample;
