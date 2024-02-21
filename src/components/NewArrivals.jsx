/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Title from "./layouts/Title";
import Container from "./layouts/Container";
import Product from "./layouts/Product";
import product1 from "../assets/product.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import Slider from "react-slick";
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";

const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[24px] px-[24px] rounded-full bg-[#C2C2C2] text-white text-2xl absolute z-10 right-5 top-[35%]"
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiOutlineArrowSmallRight />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "py-[24px] px-[24px] rounded-full bg-[#C2C2C2] text-white text-2xl z-10 absolute left-5 top-[35%]"
        }
        style={{ ...style }}
        onClick={onClick}
      >
        <HiOutlineArrowSmallLeft />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
         infinite: true,
         slidesToScroll: 1,
         arrows: false
         
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
         infinite: true,
         slidesToScroll: 1,
         arrows: false
         
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
         infinite: true,
         slidesToScroll: 1,
         arrows: false
         
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
         infinite: true,
         slidesToScroll: 1,
         arrows: true
         
        },
      },
    ],
  };
  return (
    <section className="pb-[213px] px-2">
      <Container>
        <Title title={"New Arrivals"} />
        <Slider {...settings}>
          <div>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5 " }
            />
          </div>
          <div>
            <Product
              showBadge={true}
              productImg={product2}
              showCategory={true}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"50%"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5" }
            />
          </div>
          <div>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product3}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5" }
            />
          </div>
          <div>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product4}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"45%"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5" }
            />
          </div>
          <div>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5" }
            />
          </div>
          <div>
            <Product
              showBadge={true}
              showCategory={true}
              productImg={product2}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              badgeTitle={"New"}
              color={"Black"}
              className={"lg:mx-5 sm:mx-5" }
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default NewArrivals;
