/* eslint react/prop-types: 0 */
import React from "react";
import "./RelatedProductsItem.css";

const RelatedProductsItem = (props) => {
  return (
    <div className="related-products__item">
      <a href="check">
        <div className="related-products__item-content">
          <img src={require("./assets/images/rpitem.png")} width="100%" alt="asset" />
          <h5 className="related-products__item-content-title">{props.title}</h5>
          <p className="related-products__item-content-amount">${props.amount_first} - ${props.amount_second}</p>
        </div>
      </a>
    </div>
  );
};



export default RelatedProductsItem;