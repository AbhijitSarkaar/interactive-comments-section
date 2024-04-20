import "./index.scss";
import React from "react";
import IconDelete from "./icon-delete.svg";
import IconEdit from "./icon-edit.svg";

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
          <img src={IconDelete} />
          <p className="text">Delete</p>
        </div>
        <div className="edit">
          <img src={IconEdit} />
          <p className="text">Edit</p>
        </div>
      </div>
    </section>
  );
};

export default CommentMobileFooter;
