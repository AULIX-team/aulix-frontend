import React from "react";
import "./SellerProfileInfo.css";
import Container from "../../../../../shared/ui/Layout/Container";


const SellerProfileInfo = () => {
  return (
    <Container>
      <div className="seller-profile-info">
        <div className="seller-profile-info__main-info">
          <img src={require("../assets/images/icon_sel.png")} width="20%" alt="icon" />
          <div className="seller-profile-info__main-info__title">
            <h6>Supplier</h6>
            <h6>Guanjoi Trading LLC</h6>
          </div>
        </div>
        <div className="seller-profile-info__div-hr">
          <hr className="seller-profile-info__div-hr-item"/>
        </div>
        <div className="seller-profile-info__status">
          <div className="seller-profile-info__status-item">
            <img src={require("./../assets/icons/country.svg").default} width="25px" alt="" />
            <h6 className="seller-profile-info__status-item__title">Germany, Berlin</h6>
          </div>
          <div className="seller-profile-info__status-item">
            <img src={require("./../assets/icons/security.svg").default} width="25px" alt="" />
            <h6 className="seller-profile-info__status-item__title">Verified Seller</h6>
          </div>
          <div className="seller-profile-info__status-item">
            <img src={require("./../assets/icons/global.svg").default} width="25px" alt="" />
            <h6 className="seller-profile-info__status-item__title">Worldwide shipping</h6>
          </div>
          <div className="seller-profile-info__btn-list">
            <a href="">
              <button className="seller-profile-info__btn-list__item" id="btn1">Send inquiry</button>
            </a>
            <a href="">
              <button className="seller-profile-info__btn-list__item" id="btn2">Sellers profile</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SellerProfileInfo;