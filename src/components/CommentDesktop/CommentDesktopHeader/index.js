import "./index.scss";
import React, { useContext } from "react";
import { CurrentUserContext } from "~/contexts/CurrentUserContext";
import UserAvatar from "~/components/UserAvatar";

const CommentDesktopHeader = ({ user, createdAt }) => {
  const currentUser = useContext(CurrentUserContext);
  const { username, image } = user;

  const isCurrentUser = currentUser.username === username;

  let actionbuttonsJsx = (
    <section className="action-buttons">
      <div className="button reply">
        <img src="/images/icon-reply.svg" />
        <p>Reply</p>
      </div>
    </section>
  );

  if (isCurrentUser) {
    actionbuttonsJsx = (
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
    );
  }

  return (
    <section className="comment-desktop-header-container">
      <section className="username">
        <UserAvatar src={image.png} />
        <div className="text">{username}</div>
        {isCurrentUser && <div className="current-user">you</div>}
        <div className="time">{createdAt}</div>
      </section>
      {actionbuttonsJsx}
    </section>
  );
};

export default CommentDesktopHeader;
