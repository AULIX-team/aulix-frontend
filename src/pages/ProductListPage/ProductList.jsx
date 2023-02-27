import React from "react";
import FilterItem from "../../components/FilterItem/FilterItem";
import LeftFilter from "../../components/LeftFilter/LeftFilter";
import FilterItemCategory from "../../components/FilterItem/FilterItemContent/FilterItemCategory";
import FilterItemCheckbox from "../../components/FilterItem/FilterItemContent/FilterItemCheckbox";
import FilterItemRadio from "../../components/FilterItem/FilterItemContent/FilterItemRadio";
import FilterItemRange from "../../components/FilterItem/FilterItemContent/FilterItemRange";
//import styles from "./ProductList.module.css";

const ProductList = () => {
  let brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  let features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
  let conditions = ["Any", "Refurbished", "Brand new", "Old items"];
  return(
    <>
      <LeftFilter>  
        <FilterItem>
          <FilterItemCategory />
        </FilterItem>
        <FilterItem>
          <FilterItemCheckbox
            heading="Brands"
            elements={brands}
          />
        </FilterItem>
        <FilterItem>
          <FilterItemCheckbox
            heading="Features"
            elements={features}
          />
        </FilterItem>
        <FilterItem>
          <FilterItemRange />
        </FilterItem>
        <FilterItem>
          <FilterItemRadio
            heading="Condition"
            elements={conditions}
          />
        </FilterItem>
        <FilterItem>
          <FilterItemCheckbox
            heading="Ratings"
            elements={brands}
          />
        </FilterItem>
      </LeftFilter>
    </>
  );
};

export default ProductList;