import React from "react";

import "./GetApp.css";

import appStore from "./img/market-button.svg";
import playMarket from "./img/market-button-1.svg";

export default function GetApp() {
  return (
    <div className="get-app">
      <h3>Get app</h3>
      <img src={appStore} alt="" />
      <img src={playMarket} alt="" />
    </div>
  );
}