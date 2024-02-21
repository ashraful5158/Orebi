/* eslint-disable no-unused-vars */
import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import Img from "./layouts/Img";
import footerlogo from "../assets/footerlogo.png";
import { FaLinkedin, FaInstagramSquare, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="font-dm py-[55px] bg-[#F5F5F3]">
      <Container>
        <Flex className={"justify-between"}>
          <div>
            <h6 className="font-dm text-[#262626] text-[16px] font-bold mb-[17px]">
              MENU
            </h6>
            <List className=" font-normal text-sm capitalize">
              <ListItem
                listName={"Home"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"/"}
              />
              <ListItem
                listName={"Shop"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"shop"}
              />
              <ListItem
                listName={"About"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Contacts"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Journal"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
            </List>
          </div>
          <div>
            <h6 className="font-dm text-[#262626] text-[16px] font-bold mb-[17px]">
              SHOP
            </h6>
            <List className=" font-normal text-sm capitalize">
              <ListItem
                listName={"Category 1"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"/"}
              />
              <ListItem
                listName={"Category 2"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"shop"}
              />
              <ListItem
                listName={"Category 3"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Category 4"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Category 5"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
            </List>
          </div>
          <div>
            <h6 className="font-dm text-[#262626] text-[16px] font-bold mb-[17px]">
              HELP
            </h6>
            <List className=" font-normal text-sm capitalize">
              <ListItem
                listName={"Privacy Policy"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"/"}
              />
              <ListItem
                listName={"Terms & Conditions"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
                link={"shop"}
              />
              <ListItem
                listName={"Special E-shop"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Shipping"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
              <ListItem
                listName={"Secure Payments"}
                linkClassName={
                  "mb-3 block text-[14px] font-normal text-[#6D6D6D]"
                }
              />
            </List>
          </div>
          <div>
            <a
              href="tel:(052) 611-5711"
              className="block font-dm text-base font-bold text-[#262626]"
            >
              (052) 611-5711
            </a>
            <a
              href="mailto:company@domain.com"
              className="block font-dm text-base font-bold text-[#262626] pt-[12px] pb-[15px]"
            >
              company@domain.com
            </a>
            <address>575 Crescent Ave. Quakertown, PA 18951</address>
          </div>
          <Img src={footerlogo} />
        </Flex>
        <Flex className={"mt-[65px] justify-between"}>
          <Flex className={"gap-4 text-xl"}>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              {" "}
              <FaInstagramSquare />
            </a>
            <a href="">
              {" "}
              <FaLinkedin />
            </a>
          </Flex>
          <h5 className="text-[14px] text-[##6D6D6D] font-normal">
            {year} Orebi Minimal eCommerce Figma Template by Adveits
          </h5>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
