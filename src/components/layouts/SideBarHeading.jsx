/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Flex from "./Flex";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useState } from "react";
import SideBarData from "./SideBarData";

const SideBarHeading = ({ title, showDrop, data }) => {
  const [showSubDrop, setShowSubDrop] = useState(true);
  return (
    <>
      {showDrop ? (
        <div onClick={() => setShowSubDrop(!showSubDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4>{title}</h4>
            {showSubDrop ? <GoTriangleUp /> : <GoTriangleDown />}
          </Flex>
          {showSubDrop &&
            data.map((value) => (
              <SideBarData title={value.name} showDataDrop={false}
              color={value.hasOwnProperty("colorCode") ? value.colorCode : false} />
              
            ))}
        </div>
      ) : (
        <div className={"items-center justify-between"}>
          <h4>{title}</h4>
          {data.map((value) => (
            <SideBarData title={value.name} showDataDrop={value.hasOwnProperty("subCategory") ? true : false}>
              {value.hasOwnProperty("subCategory") &&
              value.subCategory.map((item)=> <h4>{item.name}</h4>)}
            </SideBarData>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarHeading;
