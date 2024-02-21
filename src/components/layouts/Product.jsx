/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import product from "../../assets/product.png";
import Img from "./Img";
import Flex from "./Flex";
import { BsHeartbreakFill } from "react-icons/bs";
import { IoMdGitCompare } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ showBadge, showCategory,badgeTitle,productImg,color,price,productName,className,link }) => {
  return (
    <Link to={`/products/${link}`} className={ `${className} font-dm relative group overflow-hidden block`}>
      {showBadge && (
        <div className="absolute text-[14px] text-white bg-black px-8 py-2 font-bold top-[20px] left-[26px]">
          {badgeTitle}
        </div>
      )}
        <div className="relative">

      <Img src={productImg} imgClassName={"w-[370px] h-[370px]"} />
      <div className="bg-white w-full  p-[30px] absolute bottom-[0px] scale-0 group-hover:scale-100 transition-all">
        <Flex className={"justify-end items-center gap-x-4 mb-5"}>
          <h4 className="font-dm text-[16px] font-light text-[#767676] hover:text-[16px] hover:font-bold hover:text-[#262626] transition-all">
            Add to Wish List
          </h4>
          <BsHeartbreakFill />
        </Flex>
        <Flex className={"justify-end items-center gap-x-4 mb-5"}>
          <h4 className="font-dm text-[16px] font-light text-[#767676] hover:text-[16px] hover:font-bold hover:text-[#262626] transition-all">
          Compare
          </h4>
          <IoMdGitCompare />
        </Flex>
        <Flex className={"justify-end items-center gap-x-4 "}>
          <h4 className="font-dm text-[16px] font-light text-[#767676] hover:text-[16px] hover:font-bold hover:text-[#262626] transition-all">
          Add to Cart
          </h4>
          <FaCartPlus />
        </Flex>
      </div>
        </div>
      <Flex className={"justify-between mt-[18px]"}>
        <h3 className="font-bold text-[20px] text-[#262626] ">
          {productName}
        </h3>
        <h6 className="text-base font-light text-[#767676]">{price}</h6>
      </Flex>
      {showCategory && <h5 className="font-dm text-[16px] font-light text-[#767676]">{color}</h5>}
    </Link>
  );
};

export default Product;
