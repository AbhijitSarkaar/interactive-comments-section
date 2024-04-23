import "./index.scss";
import React from "react";

import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";
import CommentDesktopEdit from "~/components/CommentDesktop/CommentDesktopEdit";

const CommentDesktop = ({ comment, onUpvote }) => {
  const { content, createdAt, score, user } = comment;

  const [INCREMENT, DECREMENT] = ["increment", "decrement"];

  const handleClick = (type) => {
    let updatedScore = score;
    if (type === INCREMENT) updatedScore += 1;
    else if (type === DECREMENT) updatedScore -= 1;

    onUpvote({ id: comment.id, score: updatedScore });
  };

  return (
    <section className="comment-desktop-container">
      <section className="upvote-section">
        <img
          src="/images/icon-plus.svg"
          onClick={() => handleClick(INCREMENT)}
        />
        <div className="count">{score}</div>
        <img
          src="/images/icon-minus.svg"
          onClick={() => handleClick(DECREMENT)}
        />
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
