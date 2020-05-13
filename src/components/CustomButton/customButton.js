import React from "react";

import "./customButton.scss";

const CustomButton = ({ children,isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {console.log("button props",otherProps)}
    {children}
  </button>
);

export default CustomButton;
