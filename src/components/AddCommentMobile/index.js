import "./index.scss";
import React from "react";
import Avatar from "./image-juliusomo.png";

const AddCommentMobile = () => {
  return (
    <section className="add-comment-mobile-container">
      <textarea placeholder="Add a comment..."></textarea>
      <section className="footer">
        <img src={Avatar} alt="avatar"></img>
        <button>send</button>
      </section>
    </section>
  );
};

export default AddCommentMobile;
