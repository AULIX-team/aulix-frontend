import { useState } from "react";
import USA from "../../img/USA.svg";
import arrow from "../../img/arrow.svg";
import logo from "../../img/logo.svg";
import linkedin from "../../img/linkedin.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import youtube from "../../img/youtube.svg";
import appStore from "../../img/market-button.svg";
import playMarket from "../../img/market-button-1.svg";
import "./footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__socials">
          <img src={logo} alt="footer__logo" />
          <p>Best information about the company gies here but now lorem ipsum is</p>
          <div className="footer__socials-icons">
            <a className="footer__socials-icon" href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a className="footer__socials-icon" href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a className="footer__socials-icon" href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a className="footer__socials-icon" href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a className="footer__socials-icon" href="#">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <ui className="footer__links-container">
          <li className="footer__links-column">
            <h2 className="footer__links-title">About us</h2>
            <ul className="footer__links">
              <p className="footer__link">About Us</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Find store</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">About Us</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Blogs</p>
            </ul>
          </li>
          <li className="footer__links-column">
            <h2 className="footer__links-title">Partnership</h2>
            <ul className="footer__links">
              <p className="footer__link">About Us</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Find store</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">About Us</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Blogs</p>
            </ul>
          </li>
          <li className="footer__links-column">
            <h2 className="footer__links-title">Information</h2>
            <ul className="footer__links">
              <p className="footer__link">Help Center</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Help Center</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Shipping</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Contact us</p>
            </ul>
          </li>
          <li className="footer__links-column">
            <h2 className="footer__links-title">For users</h2>
            <ul className="footer__links">
              <p className="footer__link">Login</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Register</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">Settings</p>
            </ul>
            <ul className="footer__links">
              <p className="footer__link">My Orders</p>
            </ul>
          </li>
        </ui>
        <div className="footer__get-app">
          <h3 className="footer__get-app-title">Get app</h3>
          <img src={appStore} alt="appStore" />
          <img src={playMarket} alt="playMarket" />
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyrights">© 2023 Ecommerce.</p>
        <div className="footer__dropdown" onMouseLeave={closeMenu}>
          <button className="footer__dropdown-button" onMouseEnter={toggleMenu}>
            <img className="footer__flag-image" src={USA} alt="flag" />
            <h3 className="footer__language">English</h3>
            <img className="footer__arrow-image" src={arrow} alt="arrow" />
          </button>
          {isOpen && (
            <div className="footer__dropdown-menu">
              <button className="footer__dropdown-button">Russia</button>
              <button className="footer__dropdown-button">Russia</button>
              <button className="footer__dropdown-button">Russia</button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
