import "./index.scss";
import React from "react";
import CommentDesktop from "~/components/CommentDesktop";
import CommentMobile from "~/components/CommentMobile";

const CommentList = ({ comments, onUpvote, onDelete, onUpdate, onReply }) => {
  let commentsJsx = null,
    commentsMobileJsx = null;

  if (screen.width >= 900)
    commentsJsx = comments.map((comment) => (
      <CommentDesktop
        key={comment.id}
        comment={comment}
        onUpvote={onUpvote}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onReply={onReply}
      />
    ));

  if (screen.width < 900)
    commentsMobileJsx = comments.map((comment) => (
      <CommentMobile
        key={comment.id}
        comment={comment}
        onUpvote={onUpvote}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onReply={onReply}
      />
    ));

  return (
    <section className="comment-list-container">
      {commentsJsx}
      {commentsMobileJsx}
    </section>
  );
};

export default CommentList;
