import "./index.scss";
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <section className="primary-button" onClick={onClick}>
      {text}
    </section>
  );
};

export default Button;
