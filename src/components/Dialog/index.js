import "./index.scss";
import React from "react";

const Dialog = ({ children }) => {
  return (
    <section className="dialog">
      <section className="component-container">{children}</section>
    </section>
  );
};

export default Dialog;
