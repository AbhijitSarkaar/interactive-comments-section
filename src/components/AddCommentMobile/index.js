import "./index.scss";
import React, { useContext, useState } from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";
import { CurrentUserContext } from "~/contexts/CurrentUserContext";

const AddCommentMobile = ({ onSend }) => {
  const [text, setText] = useState("");
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onSend(text);
    setText("");
  };

  return (
    <section className="add-comment-mobile-container">
      <TextArea text={text} onCommentInput={setText} />
      <section className="footer">
        <UserAvatar src={currentUser.image.png} />
        <Button text={"Send"} onClick={handleClick} />
      </section>
    </section>
  );
};

export default AddCommentMobile;
