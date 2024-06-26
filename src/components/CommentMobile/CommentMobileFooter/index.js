import "./index.scss";
import React, { useContext } from "react";
import { CurrentUserContext } from "~/contexts/CurrentUserContext";
import { Upvote } from "~/constants";

const CommentMobileFooter = ({
  user,
  score,
  onUpvote,
  onDelete,
  onEditClick,
  onReplyClick,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isCurrentUser = user.username === currentUser.username;

  const handleClick = (type) => {
    let updatedScore = score;
    if (type === Upvote.INCREMENT) updatedScore++;
    if (type === Upvote.DECREMENT) updatedScore--;
    onUpvote(updatedScore);
  };

  const actionButtonsJsx = isCurrentUser ? (
    <div className="action-buttons">
      <div className="delete">
        <img src={"/images/icon-delete.svg"} onClick={onDelete} />
        <p className="text">Delete</p>
      </div>
      <div className="edit">
        <img src={"/images/icon-edit.svg"} onClick={onEditClick} />
        <p className="text">Edit</p>
      </div>
    </div>
  ) : (
    <div className="action-buttons">
      <div className="reply">
        <img src={"/images/icon-reply.svg"} onClick={onReplyClick} />
        <p className="text">Reply</p>
      </div>
    </div>
  );

  return (
    <section className="comment-mobile-footer-container">
      <div className="upvote-count">
        <img
          src={"/images/icon-plus.svg"}
          alt="plus-icon"
          onClick={() => handleClick(Upvote.INCREMENT)}
        />
        <div className="count">{score}</div>
        <img
          src={"/images/icon-minus.svg"}
          alt="minus-icon"
          onClick={() => handleClick(Upvote.DECREMENT)}
        />
      </div>
      {actionButtonsJsx}
    </section>
  );
};

export default CommentMobileFooter;
