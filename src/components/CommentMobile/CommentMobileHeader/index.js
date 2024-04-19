import "./index.scss";

import React from "react";
import Avatar from "../../AddCommentMobile/image-juliusomo.png";

const CommentMobileHeader = () => {
  return (
    <section className="comment-mobile-header-container">
      <img src={Avatar} alt="avatar" className="" />
      <div className="username">
        <p className="text">juliusomo</p>
        <div className="current-user">you</div>
      </div>
      <p className="time">1 month ago</p>
    </section>
  );
};

export default CommentMobileHeader;
