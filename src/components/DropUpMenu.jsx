import React from "react";
import { useState } from "react";

import USA from "./img/USA.svg";
import arrow from "./img/arrow.svg";

import "./DropUpMenu.css";

export default function DropUpMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="dropup" onMouseLeave={closeMenu}>
      <button className="dropup__button" onMouseEnter={toggleMenu}>
        <img src={USA} alt="" />
        <h3>English</h3>
        <img src={arrow} alt="" />
      </button>
      {isOpen && (
        <div className="dropup__menu">
          <button>Russia</button>
          <button>Russia</button>
          <button>Russia</button>
        </div>
      )}
    </div>
  );
}