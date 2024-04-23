import "./index.scss";
import React from "react";

const TextArea = ({ text, onCommentInput }) => {
  const handleChange = (e) => {
    onCommentInput(e.target.value);
  };

  return (
    <section className="textarea-container">
      <textarea
        className="textarea-input"
        value={text}
        placeholder="Add a comment..."
        onChange={handleChange}
        rows={3}
      ></textarea>
    </section>
  );
};

export default TextArea;
