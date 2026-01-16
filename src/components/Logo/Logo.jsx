import React from "react";

import LogoImg from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link className="inline-flex  items-center" to={"/"}>
      <img className="w-15 rounded-xl" src={LogoImg} alt="" />
      <h2 className="text-2xl font-bold text-green-600">BookNest</h2>
    </Link>
  );
};

export default Logo;
