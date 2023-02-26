import React from "react";
import PropTypes from "prop-types";

import "./FAQ.css";

export default function FAQ(props) {
  return (
    <div>
      <h2>{props.h}</h2>
      <p>{props.text}</p>
      <p>{props.text}</p>
      <p>{props.text}</p>
      <p>{props.text}</p>
    </div>
  );
}

FAQ.propTypes = {
  h: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};