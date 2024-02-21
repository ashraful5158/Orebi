/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const List = ({ className, children }) => {
  return <ul className={className}>
    {children}
    </ul>;
};

export default List;
