import "./index.scss";
import React from "react";

import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";
import CommentDesktopEdit from "~/components/CommentDesktop/CommentDesktopEdit";

const CommentDesktop = ({ comment }) => {
  const { content, createdAt, score, user } = comment;

  return (
    <section className="comment-desktop-container">
      <section className="upvote-section">
        <img src="/images/icon-plus.svg" />
        <div className="count">{score}</div>
        <img src="/images/icon-minus.svg" />
      </section>
      <section className="comment-section">
        <CommentDesktopHeader user={user} createdAt={createdAt} />
        <div className="body-content">{content}</div>
        {/* <CommentDesktopEdit /> */}
      </section>
    </section>
  );
};

export default CommentDesktop;
