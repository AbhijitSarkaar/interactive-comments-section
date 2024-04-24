import "./index.scss";
import React, { useState } from "react";
import TextArea from "~/components/TextArea";
import Button from "~/components/Button";

const EditComment = ({ content, onUpdate }) => {
  const [text, setText] = useState(content);

  const handleClick = () => {
    onUpdate(text);
  };

  return (
    <section className="edit-comment">
      <TextArea text={text} onCommentInput={setText} />
      <div className="button-container">
        <Button text={"Update"} onClick={handleClick} />
      </div>
    </section>
  );
};

export default EditComment;
