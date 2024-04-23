import "./index.scss";
import React from "react";
import CommentDesktop from "~/components/CommentDesktop";

const CommentList = ({ comments, onUpvote }) => {
  const commentsJsx = comments.map((comment) => {
    return (
      <CommentDesktop key={comment.id} comment={comment} onUpvote={onUpvote} />
    );
  });

  return <section className="comment-list-container">{commentsJsx}</section>;
};

export default CommentList;
