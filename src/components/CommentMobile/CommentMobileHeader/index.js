import "./index.scss";

import React from "react";

const CommentMobileHeader = () => {
  return (
    <section className="comment-mobile-header-container">
      <img src={"/images/image-juliusomo.png"} alt="avatar" className="" />
      <div className="username">
        <p className="text">juliusomo</p>
        <div className="current-user">you</div>
      </div>
      <p className="time">1 month ago</p>
    </section>
  );
};

export default CommentMobileHeader;
