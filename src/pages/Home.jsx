/* eslint-disable no-unused-vars */

import React from "react";
import Banner from "../components/Banner";
import Body from "../components/Body";
import NewArrivals from "../components/NewArrivals";
import Sample from "../components/Sample";
import BigSale from "../components/layouts/BigSale";
import SpecialOffer from "../components/SpecialOffer";


const Home = () => {
  return (
    <>
      <Banner />
      <Body />
      <NewArrivals />
      <Sample/>
      <BigSale/>
      <SpecialOffer/>
     
    </>
  );
};

export default Home;
