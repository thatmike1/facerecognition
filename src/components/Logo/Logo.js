import React, { Fragment } from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <Fragment>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4008/4008270.png"
        className="h-8 mr-3"
        alt="Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
        FaciNator
      </span>
    </Fragment>
  );
};

export default Logo;
