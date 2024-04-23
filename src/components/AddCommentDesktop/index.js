import "./index.scss";
import React, { useState } from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";

const AddCommentDesktop = ({ avatarUrl, onSend }) => {
  const [commentText, setCommentText] = useState("");

  const handleClick = () => {
    onSend(commentText);
    setCommentText("");
  };

  return (
    <section className="add-comment-desktop-container">
      <UserAvatar src={avatarUrl} />
      <TextArea text={commentText} onCommentInput={setCommentText} />
      <Button text={"Send"} onClick={handleClick} />
    </section>
  );
};

export default AddCommentDesktop;
