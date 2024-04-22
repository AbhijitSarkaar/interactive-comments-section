import "./index.scss";
import React from "react";

import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";

const CommentDesktop = () => {
  return (
    <section className="comment-desktop-container">
      <section className="upvote-section">
        <img src="/images/icon-plus.svg" />
        <div className="count">5</div>
        <img src="/images/icon-minus.svg" />
      </section>
      <section className="comment-section">
        <CommentDesktopHeader />
      </section>
    </section>
  );
};

export default CommentDesktop;
