import "./index.scss";
import React from "react";

import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";
import CommentDesktopEdit from "~/components/CommentDesktop/CommentDesktopEdit";

const CommentDesktop = ({ comment, onUpvote, onDelete }) => {
  const { content, createdAt, score, user } = comment;

  const [INCREMENT, DECREMENT] = ["increment", "decrement"];

  const handleClick = (type) => {
    let updatedScore = score;
    if (type === INCREMENT) updatedScore += 1;
    else if (type === DECREMENT) updatedScore -= 1;

    onUpvote({ id: comment.id, score: updatedScore });
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleEdit = () => {
    console.log("handleEdit");
  };

  const handleReply = () => {
    console.log("handleReply");
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
        <CommentDesktopHeader
          user={user}
          createdAt={createdAt}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onReply={handleReply}
        />
        <div className="body-content">{content}</div>
        {/* <CommentDesktopEdit /> */}
      </section>
    </section>
  );
};

export default CommentDesktop;
