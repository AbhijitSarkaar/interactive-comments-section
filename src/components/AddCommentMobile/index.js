import "./index.scss";
import React, { useState } from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";

const AddCommentMobile = ({ avatarUrl, onSend }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    onSend(text);
    setText("");
  };

  return (
    <section className="add-comment-mobile-container">
      <TextArea text={text} onCommentInput={setText} />
      <section className="footer">
        <UserAvatar src={avatarUrl} />
        <Button text={"Send"} onClick={handleClick} />
      </section>
    </section>
  );
};

export default AddCommentMobile;
