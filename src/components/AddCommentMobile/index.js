import "./index.scss";
import React from "react";

const AddCommentMobile = () => {
  return (
    <section className="add-comment-mobile-container">
      <textarea placeholder="Add a comment..."></textarea>
      <section className="footer">
        <img src={"/images/image-juliusomo.png"} alt="avatar"></img>
        <button>send</button>
      </section>
    </section>
  );
};

export default AddCommentMobile;
