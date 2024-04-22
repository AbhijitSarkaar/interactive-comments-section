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
        <div className="body-content">
          <span className="mention">@ramsesmiron</span> I couldn’t agree more
          with this. Everything moves so fast and it always seems like everyone
          knows the newest library/framework. But the fundamentals are what stay
          constant.
        </div>
      </section>
    </section>
  );
};

export default CommentDesktop;
