/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = ({
  className,
  labelClassName,
  label,
  inputClassName,
  placeholder,
  type,
  value,
  onChange,
  name
}) => {
  return (
    <div className={className}>
      <label htmlFor="" className={`block ${labelClassName}`}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} className={inputClassName} value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default Input;
