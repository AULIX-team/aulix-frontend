import React from "react";
import PropTypes from "prop-types";


export default function SocialIcon(props) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#">
      <img src={props.src} alt="" />
    </a>
  );
}

SocialIcon.propTypes = {
  src: PropTypes.string.isRequired
};