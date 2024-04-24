import "./index.scss";
import React, { useState } from "react";
import CommentMobileHeader from "~/components/CommentMobile/CommentMobileHeader";
import CommentMobileFooter from "~/components/CommentMobile/CommentMobileFooter";
import EditComment from "~/components/EditComment";
import CommentList from "~/components/CommentList";
import AddCommentMobile from "~/components/AddCommentMobile";

const CommentMobile = ({ comment, onUpvote, onDelete, onUpdate, onReply }) => {
  const { content, user, createdAt, score, replies, replyingTo } = comment;

  const [editMode, setEditMode] = useState(false);
  const [replyMode, setReplyMode] = useState(false);

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

  const handleReplyClick = () => {
    setReplyMode(true);
  };

  const handleReply = (text) => {
    onReply({ id: comment.id, content: text, replyingTo: user.username });
    setReplyMode(false);
  };

  let repliesJsx = null;
  if (replies && replies.length > 0)
    repliesJsx = (
      <section className="mobile-replies-container">
        <section className="mobile-replies">
          <CommentList
            comments={replies}
            onUpvote={onUpvote}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onReply={(data) => {
              onReply({
                id: comment.id,
                content: data.content,
                replyingTo: data.replyingTo,
              });
            }}
          />
        </section>
      </section>
    );

  let mentionJsx = <span className="mention">@{replyingTo}</span>;
  let contentJsx = (
    <>
      {replyingTo && mentionJsx} {content}
    </>
  );

  return (
    <>
      <section className="comment-mobile-container">
        <CommentMobileHeader user={user} createdAt={createdAt} />
        {editMode ? (
          <EditComment content={contentJsx} onUpdate={handleUpdate} />
        ) : (
          <p className="body-content">{contentJsx}</p>
        )}

        <CommentMobileFooter
          user={user}
          score={score}
          onUpvote={handleUpvote}
          onDelete={handleDelete}
          onEditClick={handleEditMode}
          onReplyClick={handleReplyClick}
        />
      </section>
      {replyMode && <AddCommentMobile onSend={handleReply} />}
      {repliesJsx}
    </>
  );
};

export default CommentMobile;
