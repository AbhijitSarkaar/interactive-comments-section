import "./index.scss";
import React from "react";
import Button from "../Button";
import TextArea from "../TextArea";
import UserAvatar from "../UserAvatar";

const AddCommentDesktop = () => {
  const commentText = `Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!`;

  return (
    <section className="add-comment-desktop-container">
      <UserAvatar src={"/images/image-juliusomo.png"} />
      <TextArea text={commentText} />
      <Button text={"Send"} />
    </section>
  );
};

export default AddCommentDesktop;
