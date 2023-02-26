import React from "react";

import "../reset.css";
import "../App.css";

import Socials from "../components/Socials";
import FAQ from "../components/FAQ";
import GetApp from "../components/GetApp";
import DropUpMenu from "../components/DropUpMenu";

const App = () => {
  return ( <>
    <div className="footer">
      <Socials />
      <div className="FAQ">
        <FAQ h="About us" text="About us" />
        <FAQ h="Partnership" text="About us"/>
        <FAQ h="Information" text="About us"/>
        <FAQ h="For users" text="About us"/>
      </div>
      <GetApp />
    </div>
    <div className="footer-bottom">
      <p>© 2023 Ecommerce. </p>
      <DropUpMenu />
    </div>
  </>
  );
};

export default App;