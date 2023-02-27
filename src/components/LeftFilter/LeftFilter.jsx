/* eslint react/prop-types: 0 */
import React from "react";
import styles from "./LeftFilter.module.css";

const LeftFilter = (props) => {
  return(
    <div className={styles["left-filter"]}>{props.children}</div>
  );
};

export default LeftFilter;