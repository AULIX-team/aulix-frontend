/* eslint react/prop-types: 0 */
import React from "react";
import styles from "./FilterItem.module.css";

const FilterItem = (props) => {
  return(
    <div className={styles["filter-item"]}>{props.children}</div>
  );
};

export default FilterItem;