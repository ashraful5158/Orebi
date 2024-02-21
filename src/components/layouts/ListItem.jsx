/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ link, className, linkClassName, listName }) => {
  return (
    <li className={className}>
      <Link to={link} className={linkClassName}>
        {listName}
      </Link>
    </li>
  );
};

export default ListItem;
