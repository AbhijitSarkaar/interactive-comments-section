import "./index.scss";
import React from "react";
import Button from "~/components/Button";
import TextArea from "~/components/TextArea";
import UserAvatar from "~/components/UserAvatar";

const AddCommentMobile = () => {
  return (
    <section className="add-comment-mobile-container">
      <TextArea text={""} />
      <section className="footer">
        <UserAvatar src={"/images/image-juliusomo.png"} />
        <Button text={"Send"} />
      </section>
    </section>
  );
};

export default AddCommentMobile;
