import styles from "./FilterItemRadio.module.css";

const FilterItemRadio = (props) => {
  return(
    <div className={styles["radio-filter"]}>
      <h6>{props.heading}</h6>
      <ul>
        <li>
          <label>
            <input name="radio" value={props.elements[0]} type="radio" />
            <span>{props.elements[0]}</span>
          </label>
        </li>
        <li>
          <label>
            <input name="radio" value={props.elements[1]} type="radio" />
            <span>{props.elements[1]}</span>
          </label>
        </li>
        <li>
          <label>
            <input name="radio" value={props.elements[2]} type="radio" />
            <span>{props.elements[2]}</span>
          </label>
        </li>
        <li>
          <label>
            <input name="radio" value={props.elements[3]} type="radio" />
            <span>{props.elements[3]}</span>
          </label>
        </li>
      </ul>
    </div>

  )
}

export default FilterItemRadio;