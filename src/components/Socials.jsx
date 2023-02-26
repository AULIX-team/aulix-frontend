import React from "react";

import Logo from "../components/Logo";
import SocialIcon from "./SocialIcon";

import linkedin from "./img/linkedin3.svg";
import facebook from "./img/facebook3.svg";
import twitter from "./img/twitter3.svg";
import instagram from "./img/instagram3.svg";
import youtube from "./img/youtube3.svg";

import "./Socials.css";

export default function Socials() {
  return (
    <div className="socials">
      <Logo></Logo>
      <p>Best information about the company gies here but now lorem ipsum is</p>
      <div className="socials__icons">
        <SocialIcon src={linkedin} />
        <SocialIcon src={facebook} />
        <SocialIcon src={twitter} />
        <SocialIcon src={instagram} />
        <SocialIcon src={youtube} />
      </div>
    </div>
  );
}

