import "./index.scss";
import React, { useState } from "react";
import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";
import CommentDesktopEdit from "~/components/CommentDesktop/CommentDesktopEdit";

const constants = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const CommentDesktop = ({ comment, onUpvote, onDelete, onUpdate }) => {
  const { content, createdAt, score, user } = comment;

  const [editMode, setEditMode] = useState(false);

  const handleClick = (type) => {
    let updatedScore = score;
    if (type === constants.INCREMENT) updatedScore += 1;
    else if (type === constants.DECREMENT) updatedScore -= 1;

    onUpvote({ id: comment.id, score: updatedScore });
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleReply = () => {
    console.log("handleReply");
  };

  const handleUpdate = (text) => {
    onUpdate({ id: comment.id, content: text });
    setEditMode(false);
  };

  const commentBodyJsx = editMode ? (
    <CommentDesktopEdit content={content} onUpdate={handleUpdate} />
  ) : (
    <div className="body-content">{content}</div>
  );

  return (
    <section className="comment-desktop-container">
      <section className="upvote-section">
        <img
          src="/images/icon-plus.svg"
          onClick={() => handleClick(constants.INCREMENT)}
        />
        <div className="count">{score}</div>
        <img
          src="/images/icon-minus.svg"
          onClick={() => handleClick(constants.DECREMENT)}
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
        {commentBodyJsx}
      </section>
    </section>
  );
};

export default CommentDesktop;
