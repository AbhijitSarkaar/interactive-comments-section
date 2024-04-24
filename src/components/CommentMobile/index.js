import "./index.scss";
import React, { useState } from "react";
import CommentMobileHeader from "~/components/CommentMobile/CommentMobileHeader";
import CommentMobileFooter from "~/components/CommentMobile/CommentMobileFooter";
import EditComment from "~/components/EditComment";

const CommentMobile = ({ comment, onUpvote, onDelete, onUpdate, onReply }) => {
  const { content, user, createdAt, score } = comment;

  const [editMode, setEditMode] = useState(false);

  const handleUpvote = (value) => {
    onUpvote({ id: comment.id, score: value });
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleUpdate = (text) => {
    onUpdate({ id: comment.id, content: text });
    setEditMode(false);
  };

  return (
    <>
      <section className="comment-mobile-container">
        <CommentMobileHeader user={user} createdAt={createdAt} />
        {editMode ? (
          <EditComment content={content} onUpdate={handleUpdate} />
        ) : (
          <p className="body-content">{content}</p>
        )}

        <CommentMobileFooter
          user={user}
          score={score}
          onUpvote={handleUpvote}
          onDelete={handleDelete}
          onEditClick={handleEditMode}
        />
      </section>
    </>
  );
};

export default CommentMobile;
