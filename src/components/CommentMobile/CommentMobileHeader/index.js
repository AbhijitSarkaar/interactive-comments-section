import "./index.scss";

import React from "react";
import UserAvatar from "~/components/UserAvatar";

const CommentMobileHeader = () => {
  return (
    <section className="comment-mobile-header-container">
      <UserAvatar src={"/images/image-juliusomo.png"} />
      <div className="username">
        <p className="text">juliusomo</p>
        <div className="current-user">you</div>
      </div>
      <p className="time">1 month ago</p>
    </section>
  );
};

export default CommentMobileHeader;
