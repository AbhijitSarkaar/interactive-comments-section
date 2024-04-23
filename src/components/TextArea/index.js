import "./index.scss";
import React from "react";

const TextArea = ({ text }) => {
  return (
    <section className="textarea-container">
      <textarea
        className="textarea-input"
        value={text}
        onChange={() => {}}
        rows={3}
      ></textarea>
    </section>
  );
};

export default TextArea;
