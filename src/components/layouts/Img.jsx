/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from "react";

const Img = ({className, imgClassName, src, alt}) => {
  return (
    <div className={className}>
      <picture>
        <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        className={imgClassName}
        />
      </picture>
    </div>
  );
};

export default Img;
