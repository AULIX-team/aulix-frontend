import React from "react";
import "./MainCardInfo.css";

const MainCardInfo = () => {
  return (
    <div className="main-card-info">
      <div className="main-card-info__stock">
        <img src={require("./../assets/icons/success.svg").default} alt="" />
        <h6 className="main-card-info__stock-text">In stock</h6>
      </div>
      <div className="main-card-info__about">
        <h2 className="main-card-info__about-title">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
        <div className="main-card-info__about-stats">
          <div className="main-card-info__about-stats__stars">
            <img src={require("./../assets/icons/star-fill.svg").default} alt="" />
            <img src={require("./../assets/icons/star-fill.svg").default} alt="" />
            <img src={require("./../assets/icons/star-fill.svg").default} alt="" />
            <img src={require("./../assets/icons/star-fill.svg").default} alt="" />
            <img src={require("./../assets/icons/star.svg").default} alt="" />
            <h5 className="main-card-info__about-stats__stars-amount">9.3</h5>
          </div>
          <div className="main-card-info__about-stats__circle">
          </div>
          <div className="main-card-info__about-stats__comments">
            <img src={require("./../assets/icons/comments.svg").default} alt="" />
            <h5 className="main-card-info__about-stats__comments-txt">32 reviews</h5>
          </div>
          <div className="main-card-info__about-stats__circle">
          </div>
          <div className="main-card-info__about-stats__comments">
            <img src={require("./../assets/icons/sold.svg").default} alt="" />
            <h5 className="main-card-info__about-stats__comments-txt">154 sold</h5>
          </div>
        </div>
      </div>
      <div className="main-card-info__costs">
        <div className="main-card-info__costs-item">
          <h3 className="main-card-info__costs-item__cost" id="cost1">$98.00</h3>
          <h5 className="main-card-info__costs-item__pcs" id="pcs1">50-100 pcs</h5>
        </div>
        <div className="main-card-info__costs-vr">
        </div>
        <div className="main-card-info__costs-item">
          <h3 className="main-card-info__costs-item__cost" id="cost2">$90.00</h3>
          <h5 className="main-card-info__costs-item__pcs" id="pcs2">100-700 pcs</h5>
        </div>
        <div className="main-card-info__costs-vr">
        </div>
        <div className="main-card-info__costs-item">
          <h3 className="main-card-info__costs-item__cost" id="cost3">$78.00</h3>
          <h5 className="main-card-info__costs-item__pcs" id="pcs3">700+ pcs</h5>
        </div>

      </div>

      <div className="main-card-info__description">
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Price:</h3>
          <h3 className="main-card-info__description-item-txt">Negotiable</h3>
        </div>
        <div className="main-card-info__description-hr">
          <hr className="main-card-info__description-hr-item" />
        </div>
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Type:</h3>
          <h3 className="main-card-info__description-item-txt">Classic shoes</h3>
        </div>
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Material:</h3>
          <h3 className="main-card-info__description-item-txt">Plastic material</h3>
        </div>
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Design:</h3>
          <h3 className="main-card-info__description-item-txt">Modern nice</h3>
        </div>
        <div className="main-card-info__description-hr">
          <hr className="main-card-info__description-hr-item" />
        </div>

        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Customization:</h3>
          <h3 className="main-card-info__description-item-txt">Customized logo and design</h3>
        </div>
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Protection:</h3>
          <h3 className="main-card-info__description-item-txt">Refund Policy</h3>
        </div>
        <div className="main-card-info__description-item">
          <h3 className="main-card-info__description-item-name">Warranty:</h3>
          <h3 className="main-card-info__description-item-txt">2 years full warranty </h3>
        </div>
        <div className="main-card-info__description-hr">
          <hr className="main-card-info__description-hr-item" />
        </div>

      </div>
    </div>
  );
};

export default MainCardInfo;