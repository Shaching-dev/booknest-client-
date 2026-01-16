import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Container from "../Container/Container";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const links = (
    <div className="flex items-center space-x-4">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#087ea4] font-bold" : "font-bold"
        }
        to={"/"}>
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
        to={"/books"}>
        Books
      </NavLink>
    </div>
  );

  return (
    <div className="bg-base-300">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <span
                tabIndex="-1"
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
              </span>
            </div>
            <div>
              <Logo />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <span className="menu menu-horizontal px-1">{links}</span>
          </div>
          <div className="navbar-end space-x-5">
            <ThemeToggle />
            <button className="btn">Login</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
