import "./index.scss";
import React, { useContext, useState } from "react";
import CommentDesktopHeader from "~/components/CommentDesktop/CommentDesktopHeader";
import CommentDesktopEdit from "~/components/CommentDesktop/CommentDesktopEdit";
import AddCommentDesktop from "~/components/AddCommentDesktop";
import { CurrentUserContext } from "~/contexts/CurrentUserContext.js";
import CommentList from "../CommentList";

const constants = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const CommentDesktop = ({ comment, onUpvote, onDelete, onUpdate, onReply }) => {
  const { content, createdAt, score, user, replies } = comment;

  const [editMode, setEditMode] = useState(false);
  const [replyMode, setReplyMode] = useState(false);

  const currentUser = useContext(CurrentUserContext);

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
    setReplyMode(true);
  };

  const handleUpdate = (text) => {
    onUpdate({ id: comment.id, content: text });
    setEditMode(false);
  };

  const handleReplyUpdate = (text) => {
    onReply({ id: comment.id, content: text, replyingTo: user.username });
    setReplyMode(false);
  };

  const commentBodyJsx = editMode ? (
    <CommentDesktopEdit content={content} onUpdate={handleUpdate} />
  ) : (
    <div className="body-content">{content}</div>
  );

  let repliesJsx = null;
  if (replies) {
    repliesJsx = replies.length > 0 && (
      <section className="replies-container">
        <section className="replies">
          <CommentList comments={replies} />
        </section>
      </section>
    );
  }

  return (
    <section className="comment-desktop-container">
      <section className="comment">
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
      {replyMode && (
        <AddCommentDesktop
          avatarUrl={currentUser.image.png}
          onSend={handleReplyUpdate}
        />
      )}
      {repliesJsx}
    </section>
  );
};

export default CommentDesktop;
