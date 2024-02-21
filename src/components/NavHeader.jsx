/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import DropDown from "./layouts/DropDown";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import Img from "./layouts/Img";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const category = useRef();
  const cartRef = useRef();
  const user = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (category.current.contains(e.target)) {
        setShowCategory(!showCategory);
      } else {
        setShowCategory(false);
      }
      if (cartRef.current.contains(e.target)) {
        setShowCart(!showCart);
      } else {
        setShowCart(false);
      }
      if (user.current.contains(e.target)) {
        setShowUser(!showUser);
      } else {
        setShowUser(false);
      }
    });
  }, [showCategory, showUser, showCart]);
  return (
    <section className="bg-[#F5F5F3] py-[25px] px-2">
      <Container>
        <Flex className={"justify-between items-center"}>
          <DropDown
            className={
              "items-center gap-x-3 cs:w-[11%] cursor-pointer relative z-10"
            }
            ref2={category}
          >
            <Flex>
              <HiBars3BottomLeft className="text-2xl text-[#262626] z-10" />
              <h6 className="hidden md:block">Shop by Category</h6>
              {showCategory && (
                <List
                  className={
                    "w-[263px] bg-[#262626] absolute text-categoryLink top-10 left-0"
                  }
                >
                  <ListItem
                    listName={"Accesories"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Furniture"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Electronics"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Clothes"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Bags"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                  <ListItem
                    listName={"Home appliances"}
                    linkClassName={
                      "py-[16px] px-[21px] block hover:px-[30px] hover:text-white transition-all"
                    }
                    className={"border-b border-[#2D2D2D]"}
                  />
                </List>
              )}
            </Flex>
          </DropDown>

          <div className="cs:w-[40%] font-dm text-sm">
            <input
              type="text"
              placeholder="Search Products"
              className="sm:w-[500px] cs:w-[600px] md:w-[400px] outline-transparent py-[16px] px-[21px] placeholder:text-sm placeholder:text-[#C4C4C4]"
              id="search"
            />
            <label htmlFor="search" className="inline-block sm:ml-[-50px] ml-[-40px] text-xl sm:text-2xl cursor-pointer" >
              <ImSearch />
            </label>
          </div>
          <Flex className={"cs:w-[5%] text-xl justify-between items-center"}>
            <DropDown className={"relative z-10"} ref2={user}>
              <Flex className={"items-center cursor-pointer"}>
                <FaUser />
                <GoTriangleDown />
                {showUser && (
                  <List
                    className={
                      "w-[200px]  absolute text-categoryLink top-10 right-0 capitalize text-center"
                    }
                  >
                    <ListItem
                      listName={"My Account"}
                      linkClassName={
                        "py-4  inline-block text-white text-dm text-[14px] font-bold"
                      }
                      className={" bg-[#262626]"}
                    />
                    <ListItem
                      listName={"Log Out"}
                      linkClassName={
                        "py-[17px] px-[59px] inline-block text-black text-[14px] font-normal text-dm "
                      }
                      className={"border border-[#F0F0F0] bg-white"}
                    />
                  </List>
                )}
              </Flex>
            </DropDown>
            <DropDown className={"relative z-10"} ref2={cartRef}>
              <RiShoppingCart2Fill className="cursor-pointer" />
              {showCart && (
                <div className="absolute w-[358px] bg-[#F5F5F3] right-0 top-10 ">
                  <Flex className={"items-center justify-between p-5"}>
                    <Img
                      src={cart}
                      imgClassName={"full"}
                      className={"w-20 h-20"}
                    />
                    <div className="font-dm text-[14px] font-bold w-[50%]">
                      <h5>Black Smart Watch</h5>
                      <h6>$44.00</h6>
                    </div>
                    <ImCross className="text-sm" />
                  </Flex>
                  <div className="p-5 font-dm bg-white">
                    <h4 className="font-normal text-base">
                      Subtotal:
                      <span className="font-bold">$44.00</span>
                    </h4>
                    <div className="text-sm font-bold capitalize mt-5">
                      <Link
                        to={"/cart"}
                        className="  px-[40px] py-[16px] border border-[ #2B2B2B]"
                      >
                        View Cart
                      </Link>
                      <a
                        href=""
                        className="  px-[40px] py-[16px] border border-black bg-black text-white ml-[  20px]"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </DropDown>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default NavHeader;
