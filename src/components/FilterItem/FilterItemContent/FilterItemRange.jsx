import styles from "./FilterItemRange.module.css";

const FilterItemRange = () => {
  return(
    <div className={styles.range}>
      <h6>Price range</h6>
      <div className={styles["price-input"]}>
        <div className={styles.field}>
          <p>Min</p>
          <input placeholder="0" type="number" className="input-min"/>
        </div>
        <div className={styles.field}>
          <p>Max</p>
          <input placeholder="10000" type="number" className="input-max"/>
        </div>
      </div> 
      <div className={styles.slider}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles["range-input"]}>
        <input type="range" className="range-min" min="0" max="10000"/>
        <input type="range" className="range-max" min="0" max="10000" value="7000"/>
      </div>
      <div className={styles["button-range"]}>
        <button>Apply</button>
      </div>
    </div>
    
  );
};

export default FilterItemRange;