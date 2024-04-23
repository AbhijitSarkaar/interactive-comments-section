import "./index.scss";
import React from "react";
import Button from "../Button";

const AddCommentMobile = () => {
  return (
    <section className="add-comment-mobile-container">
      <textarea placeholder="Add a comment..."></textarea>
      <section className="footer">
        <img src={"/images/image-juliusomo.png"} alt="avatar"></img>
        <Button text={"Send"} />
      </section>
    </section>
  );
};

export default AddCommentMobile;
