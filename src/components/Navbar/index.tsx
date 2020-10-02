import React, { useState } from "react";

import { BsPlus } from "react-icons/bs";
import { RiCactusFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  const [colorIcon, setColorIcon] = useState("#80B34C");
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link
            to="/"
            className="navbar-item logo"
            onMouseEnter={() => setColorIcon("#759F4B")}
            onMouseLeave={() => setColorIcon("#80B34C")}
          >
            <RiCactusFill size={40} color={colorIcon} />
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li>
              <Link to="/create">
                <span>
                  <BsPlus />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
