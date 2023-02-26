import React from "react";

import Logo from "../components/Logo";
import Search from "../components/Search";
import ActionComponent from "../components/ActionComponent";

import "../reset.css";
import "../App.css";

import profile from "../components/img/profile.svg";
import message from "../components/img/message.svg";
import orders from "../components/img/orders.svg";
import cart from "../components/img/cart.svg";

const App = () => {
  return (
    <>
      <div className="search-align">
        <Logo></Logo>
        <Search></Search>
        <div className="header-icons">
          <ActionComponent ImgSrc={profile} imageText="Profile"></ActionComponent>
          <ActionComponent ImgSrc={message} imageText="Message"></ActionComponent>
          <ActionComponent ImgSrc={orders} imageText="Orders"></ActionComponent>
          <ActionComponent ImgSrc={cart} imageText="My cart"></ActionComponent>
        </div>
      </div>
    </>
  );
};

export default App;