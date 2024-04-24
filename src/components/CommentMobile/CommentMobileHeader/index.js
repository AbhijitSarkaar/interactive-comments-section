import "./index.scss";

import React, { useContext } from "react";
import UserAvatar from "~/components/UserAvatar";
import { CurrentUserContext } from "~/contexts/CurrentUserContext";

const CommentMobileHeader = ({ user, createdAt }) => {
  const currentuser = useContext(CurrentUserContext);
  const isCurrentUser = user.username === currentuser.username;

  return (
    <section className="comment-mobile-header-container">
      <UserAvatar src={user.image.png} />
      <div className="username">
        <p className="text">{user.username}</p>
        {isCurrentUser && <div className="current-user">you</div>}
      </div>
      <p className="time">{createdAt}</p>
    </section>
  );
};

export default CommentMobileHeader;
