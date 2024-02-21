/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Flex from "../layouts/Flex"
import {BsPlus} from "react-icons/bs"
import {HiMiniMinusSmall} from "react-icons/hi2"

const SideBarData = ({ title, showDataDrop, color, children }) => {
  const [showSubDataDrop, setShowSubDrop] = useState(true)
  return (
    
    <section>

      {
      showDataDrop ? 
        <div onClick={()=>setShowSubDrop(!showSubDataDrop)}>
          <Flex className={"items-center justify-between"}>
            <h4>{title}</h4>
            {
            showSubDataDrop ? 
            <BsPlus /> : <HiMiniMinusSmall />
            }
          </Flex> 
        </div> :
        <div>
          <Flex className={"items-center"}>

          <span style={{background:color}} className="w-3 h-3 rounded-full mr-2"></span><h4>{title}</h4>
          </Flex>
        </div>
      }
      {showSubDataDrop && children}
    </section>
    
  );
};

export default SideBarData;
