import React from "react";
import style from "./capsule.module.css";
import PropTypes from "prop-types";

const Capsule = ({ tech }: { tech: string }) => {
  return <div>{tech}</div>;
};

Capsule.propTypes = {
  tech: PropTypes.string.isRequired, // Ensure tech prop is always a string
};

export default Capsule;
