import React from "react";
import "./RelatedProducts.css";
import RelatedProductsItem from "./components/RelatedProductsItem";

const RelatedProducts = (props) => {
  const titleItem = "Xiaome Redmi Note 8 Original";
  const amountFirst = "25.00";
  const amountSecond = "35.00";
  return (
    <section className="related-products">
      <h3>Related products</h3>
      <div className="related-products__items">
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
        <RelatedProductsItem title={titleItem} amount_first={amountFirst} amount_second={amountSecond}/>
      </div>
    </section>
  );
};

export default RelatedProducts;