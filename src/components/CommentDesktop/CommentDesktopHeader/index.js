import "./index.scss";
import React from "react";
import UserAvatar from "../../UserAvatar";

const CommentDesktopHeader = ({ user, createdAt }) => {
  const { username, image } = user;

  return (
    <section className="comment-desktop-header-container">
      <section className="username">
        <UserAvatar src={image.png} />
        <div className="text">{username}</div>
        <div className="current-user">you</div>
        <div className="time">{createdAt}</div>
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
        {/* <div className="button reply">
          <img src="/images/icon-reply.svg" />
          <p>Reply</p>
        </div> */}
      </section>
    </section>
  );
};

export default CommentDesktopHeader;
