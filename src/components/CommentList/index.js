import "./index.scss";
import React from "react";
import CommentDesktop from "~/components/CommentDesktop";

const CommentList = ({ comments, onUpvote, onDelete, onUpdate }) => {
  const commentsJsx = comments.map((comment) => {
    return (
      <CommentDesktop
        key={comment.id}
        comment={comment}
        onUpvote={onUpvote}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });

  return <section className="comment-list-container">{commentsJsx}</section>;
};

export default CommentList;
