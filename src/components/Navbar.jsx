/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Img from "./layouts/Img";
import Flex from "./layouts/Flex";
import Logo from "../assets/logo.png";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 640) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);
  return (
    <nav className="py-8 px-2">
      <Container>
        <Flex>
          <Img src={Logo} className={"sm:w-1/12 w-[full]"} />
          <div className="w-11/12">
            <FaBars
              className="sm:hidden ml-auto cursor-pointer"
              onClick={handleShowMenu}
            />
            {showMenu && (
              <List
                className="sm:flex font-normal font-dm gap-x-10 text-sm capitalize justify-center
            text-navColor absolute bg-[#262626] w-full left-0 sm:relative sm:bg-transparent text-categoryLink sm:left-0 top-16 sm:top-0 z-10 "
              >
                <ListItem
                  listName={"Home"}
                  linkClassName={
                    "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"/"}
                />
                <ListItem
                  listName={"Shop"}
                  linkClassName={
                    "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"shop"}
                />
                <ListItem
                  listName={"About"}
                  linkClassName={
                    "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"about"}
                />
                <ListItem
                  listName={"Contacts"}
                  linkClassName={
                    "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"contact"}
                />
                <ListItem
                  listName={"Journal"}
                  linkClassName={
                    "py-4 block px-5 hover:px-[30px] hover:text-white transition-all sm:p-0 sm:hover:p-0 sm:hover:text-navColor"
                  }
                  link={"journal"}
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
