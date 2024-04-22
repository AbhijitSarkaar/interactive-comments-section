import "./index.scss";
import React from "react";

const CommentDesktopHeader = () => {
  return (
    <section className="comment-desktop-header-container">
      <section className="username">
        <img src="/images/image-juliusomo.png" />
        <div className="text">juliusomo</div>
        <div className="current-user">you</div>
        <div className="time">1 week ago</div>
      </section>
      <section className="action-buttons">
        <div className="button delete">
          <img src="/images/icon-delete.svg" />
          <p>Delete</p>
        </div>
        <div className="button edit">
          <img src="/images/icon-edit.svg" />
          <p>Edit</p>
        </div>
      </section>
    </section>
  );
};

export default CommentDesktopHeader;