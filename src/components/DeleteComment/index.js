import "./index.scss";
import React from "react";

const DeleteComment = () => {
  return (
    <section className="delete-comment-container">
      <p className="header-text">Delete comment</p>
      <p className="body-content">
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </p>
      <section className="action-buttons">
        <button className="cancel">no, cancel</button>
        <button className="delete">yes, delete</button>
      </section>
    </section>
  );
};

export default DeleteComment;
