import "./index.scss";
import React from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";

const AddCommentDesktop = ({ avatarUrl }) => {
  return (
    <section className="add-comment-desktop-container">
      <UserAvatar src={avatarUrl} />
      <TextArea text={""} />
      <Button text={"Send"} />
    </section>
  );
};

export default AddCommentDesktop;
