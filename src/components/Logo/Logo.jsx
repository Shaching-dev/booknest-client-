import React from "react";

import LogoImg from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img className="w-15 rounded-xl" src={LogoImg} alt="" />
    </Link>
  );
};

export default Logo;
