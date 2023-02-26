import React from "react";
import PropTypes from "prop-types";



export default function ActionComponent(props) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px"
  };
  const size = {
    width: "25px",
    height: "25px"
  };
  return (
    <div style={styles}>
      <img src={props.ImgSrc} alt="" style={size}/>
      <p>{props.imageText}</p>
    </div>
  );
}

ActionComponent.propTypes = {
  ImgSrc: PropTypes.string.isRequired,
  imageText: PropTypes.string.isRequired,
};