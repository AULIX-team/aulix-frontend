import React from "react";
import SellerProfileInfo from "./components/SellerProfileInfo/SellerProfileInfo";
import MainCardInfo from "./components/MainCardInfo/MainCardInfo";
import PictureSelector from "./components/PictureSelector/PictureSelector";
import "./CardOfProduct.css";

const CardOfProduct = () => {
  return (
    <section className="card-of-product">
      <div className="card-of-product__pic-sel">
        <PictureSelector />
      </div>
      <div className="card-of-product__main-card-info">
        <MainCardInfo />
      </div>
      <div className="card-of-product__sel-prof-info">
        <SellerProfileInfo />
      </div>
    </section>
  );
};

export default CardOfProduct;