import React from "react";
import SellerProfileInfo from "./components/SellerProfileInfo/SellerProfileInfo";
import MainCardInfo from "./components/MainCardInfo/MainCardInfo";
import PictureSelector from "./components/PictureSelector/PictureSelector";
import "./CardOfProduct.css";
import Container from "../../../shared/ui/Layout/Container";
import { useState, useEffect } from "react";

const CardOfProduct = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = viewportWidth >= 768;

  return (
    <div>
      { isDesktop && <Container>
      <section className="card-of-product">
        <div className="card-of-product__pic-sel">
          <PictureSelector />
        </div>
        <div className="card-of-product__main-card-info">
          <MainCardInfo />
        </div>
        <div className="card-of-product__sel-prof-info">
          <SellerProfileInfo />
          <div className="card-of-product__sel-prof-info__checkbox">
            <input type="checkbox" id="heart-checkbox" />
            <label htmlFor="heart-checkbox">
              Save for later
            </label>
          </div>

        </div>
      </section>
      </Container>}
      {!isDesktop &&
      <section className="card-of-product">
      <div className="card-of-product__pic-sel">
        <PictureSelector />
      </div>
      <div className="card-of-product__main-card-info">
        <MainCardInfo />
      </div>
      <div className="card-of-product__sel-prof-info">
        <SellerProfileInfo />
        <div className="card-of-product__sel-prof-info__checkbox">
          <input type="checkbox" id="heart-checkbox" />
          <label htmlFor="heart-checkbox">
            Save for later
          </label>
        </div>

      </div>
    </section>
    }
    </div>

  );
};

export default CardOfProduct;