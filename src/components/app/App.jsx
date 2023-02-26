import { useState, useEffect } from "react";
import "./app.css";
import Footer from "../footer/footer";

const App = () => {
  const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);

  window.onresize = newPageSize;

  function newPageSize() {
    setTimeout(() => {
      setPageWidth(document.documentElement.scrollWidth);
    }, 1000);
  }

  useEffect(() => {
    console.log(pageWidth);
  }, [pageWidth]);

  return (
    <>
      <Footer />
    </>
  );
};

export default App;
