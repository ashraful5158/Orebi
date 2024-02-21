/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import banner from "../assets/banner.png";
import { RiTranslate } from "react-icons/ri";

const Banner = () => {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            left: "200px",
            transform: "translate(-50%,-50%)",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          activeDot == i
            ? {
                width: "40px",
                color: "#262626",
                fontSize: "24px",
                fontFamily: "DM Sans",
                borderRight: "2px solid #262626",
              }
            : {
                width: "40px",
                color: "transparent",
                fontSize: "24px",
                fontFamily: "DM Sans",
                borderRight: "3px solid white",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={banner} />
      </div>
      <div>
        <img src={banner} />
      </div>
      <div>
        <img src={banner} />
      </div>
      <div>
        <img src={banner} />
      </div>
      <div>
        <img src={banner} />
      </div>
    </Slider>
  );
};

export default Banner;
