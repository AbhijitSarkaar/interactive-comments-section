import "./index.scss";
import React, { useState, useContext } from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";
import { CurrentUserContext } from "~/contexts/CurrentUserContext";

const AddCommentDesktop = ({ onSend }) => {
  const [commentText, setCommentText] = useState("");
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onSend(commentText);
    setCommentText("");
  };

  return (
    <section className="add-comment-desktop-container">
      <UserAvatar src={currentUser.image.png} />
      <TextArea text={commentText} onCommentInput={setCommentText} />
      <Button text={"Send"} onClick={handleClick} />
    </section>
  );
};

export default AddCommentDesktop;
