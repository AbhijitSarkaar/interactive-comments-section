import "./index.scss";
import React from "react";
import CommentMobileHeader from "~/components/CommentMobile/CommentMobileHeader";
import CommentMobileFooter from "~/components/CommentMobile/CommentMobileFooter";

const CommentMobile = ({ comment, onUpvote, onDelete, onUpdate, onReply }) => {
  const { content, user, createdAt, score } = comment;

  const handleUpvote = (value) => {
    onUpvote({ id: comment.id, score: value });
  };

  return (
    <section className="comment-mobile-container">
      <CommentMobileHeader user={user} createdAt={createdAt} />
      <p className="body-content">{content}</p>
      <CommentMobileFooter user={user} score={score} onUpvote={handleUpvote} />
    </section>
  );
};

export default CommentMobile;
