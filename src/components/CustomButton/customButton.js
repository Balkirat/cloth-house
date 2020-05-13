import React from "react";

import "./customButton.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
      {console.log(otherProps)}
    {children}
  </button>
);

export default CustomButton;
