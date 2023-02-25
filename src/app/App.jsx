import React from "react";
import Container from "../shared/ui/Layout/Container";
import RelatedProducts from "../pages/DetailPage/RelatedProducts/RelatedProducts";
import CardOfProduct from "../pages/DetailPage/CardOfProduct/CardOfProduct";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container>
        <CardOfProduct />
      </Container>
      <Container>
        <RelatedProducts />
      </Container>
    </div>
  );
};

export default App;