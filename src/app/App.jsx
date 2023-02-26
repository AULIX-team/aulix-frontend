import React from "react";
import "./App.css";
import Container from "./../shared/ui/Layout/Container";
import CardOfComponent from "./../pages/DetailPage/CardOfProduct/CardOfProduct";
import RelatedProducts from "./../pages/DetailPage/RelatedProducts/RelatedProducts";

const App = () => {
  return (
    <div className="App">
      <CardOfComponent/>
      <Container>
        <RelatedProducts/>
      </Container>
    </div>
  );
};

export default App;