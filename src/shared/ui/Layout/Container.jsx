import React from "react";
import "./Container.css";
import PropTypes from "prop-types";

const Container = (props) => {
  return (
    <div className='main__container'>{props.children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;