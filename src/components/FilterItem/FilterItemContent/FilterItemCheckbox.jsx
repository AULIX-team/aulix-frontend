import React from "react"
import styles from "./FilterItemCheckbox.module.css"

const FilterItemCheckbox = (props) => {
  return(
    <div className={styles["checkbox-filter"]}>
      <h6>{props.heading}</h6>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>{props.elements[0]}</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>{props.elements[1]}</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>{props.elements[2]}</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>{props.elements[3]}</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>{props.elements[4]}</span>
          </label>
        </li>


      </ul>
    </div>
  )
}

export default FilterItemCheckbox;