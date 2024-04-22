import "./index.scss";
import React from "react";

const CommentMobileFooter = () => {
  return (
    <section className="comment-mobile-footer-container">
      <div className="upvote-count">
        <span className="inc">+</span>
        <div className="count">2</div>
        <span className="dec">-</span>
      </div>
      <div className="action-buttons">
        <div className="delete">
          <img src={"/images/icon-delete.svg"} />
          <p className="text">Delete</p>
        </div>
        <div className="edit">
          <img src={"/images/icon-edit.svg"} />
          <p className="text">Edit</p>
        </div>
        {/* <div className="reply">
          <img src={"/images/icon-reply.svg"} />
          <p className="text">Reply</p>
        </div> */}
      </div>
    </section>
  );
};

export default CommentMobileFooter;
