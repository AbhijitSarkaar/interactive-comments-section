import "./index.scss";
import React, { useState } from "react";
import CommentList from "~/components/CommentList";
import AddComment from "~/components/AddComment";
import Dialog from "~/components/Dialog";
import DeleteComment from "~/components/DeleteComment";
import { CurrentUserContext } from "~/contexts/CurrentUserContext.js";
import data from "~/data/data.json";
import { ConfirmationDialog } from "~/constants";

const App = () => {
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);
  const [commentDeleteFlow, setCommentDeleteFlow] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [scoreIdHash, setScoreIdHash] = useState({
    upvoted: {},
    downvoted: {},
  });

  const handleCommentSend = (text) => {
    let currentComments = [...comments];
    currentComments.push({
      id: Math.floor(Math.random() * 99999),
      content: text,
      createdAt: "Now",
      score: 0,
      user: currentUser,
      replies: [],
    });

    setComments(currentComments);
  };

  const handleUpvote = (comment) => {
    let currentComments = [...comments];
    currentComments = currentComments.map((item) => {
      if (item.id === comment.id) {
        return {
          ...item,
          score: comment.score,
        };
      }
      let replies = [...item.replies];
      replies = replies.map((reply) => {
        if (reply.id === comment.id) {
          return {
            ...reply,
            score: comment.score,
          };
        }
        return reply;
      });

      return {
        ...item,
        replies,
      };
    });
    setComments(currentComments);
  };

  const handleDelete = (commentId) => {
    let updatedComments = [...comments];
    let commentsList = [];
    updatedComments.forEach((comment) => {
      if (comment.id !== commentId) {
        if (comment.replies) {
          let repliesList = [];
          comment.replies.forEach((reply) => {
            if (reply.id !== commentId) {
              repliesList.push(reply);
            }
          });
          comment.replies = repliesList;
        }
        commentsList.push(comment);
      }
    });

    setComments(commentsList);
  };

  const handleUpdate = (comment) => {
    let currentComments = [...comments];
    currentComments = currentComments.map((item) => {
      if (item.id === comment.id) {
        return {
          ...item,
          content: comment.content,
        };
      }

      let replies = [...item.replies];
      replies = replies.map((reply) => {
        if (reply.id === comment.id) {
          return {
            ...reply,
            content: comment.content,
          };
        }
        return reply;
      });

      return {
        ...item,
        replies,
      };
    });
    setComments(currentComments);
  };

  const handleReply = (comment) => {
    let currentComments = [...comments];
    currentComments = currentComments.map((item) => {
      if (item.id === comment.id) {
        return {
          ...item,
          replies: [
            ...item.replies,
            {
              id: Math.ceil(Math.random() * 99999),
              content: comment.content,
              createdAt: "Now",
              score: 0,
              user: currentUser,
              replyingTo: comment.replyingTo,
            },
          ],
        };
      }
      return item;
    });
    setComments(currentComments);
  };

  const handleDeleteFlow = (commentId) => {
    setDeleteId(commentId);
    setCommentDeleteFlow(true);
  };

  const handleDialogClick = (type) => {
    if (type === ConfirmationDialog.DELETE) {
      handleDelete(deleteId);
    }
    setDeleteId("");
    setCommentDeleteFlow(false);
  };

  const handleScoreUpdate = (comment) => {
    let updatedScoreIdHash = {
      ...scoreIdHash,
      upvoted: {
        ...scoreIdHash.upvoted,
      },
      downvoted: {
        ...scoreIdHash.downvoted,
      },
    };
    let currentComments = [...comments];
    let currentComment = null;

    currentComments.forEach((item) => {
      if (item.id === comment.id) {
        currentComment = { ...item };
      }
      if (item.replies) {
        item.replies.forEach((subItem) => {
          if (subItem.id === comment.id) {
            currentComment = { ...subItem };
          }
        });
      }
    });

    if (comment.score > currentComment.score) {
      if (updatedScoreIdHash.upvoted[comment.id]) return;

      updatedScoreIdHash.upvoted[comment.id] = true;

      if (updatedScoreIdHash.downvoted[comment.id]) {
        updatedScoreIdHash.upvoted[comment.id] = false;
      }
      updatedScoreIdHash.downvoted[comment.id] = false;
    } else if (comment.score < currentComment.score) {
      //already downvoted
      if (updatedScoreIdHash.downvoted[comment.id]) return;

      updatedScoreIdHash.downvoted[comment.id] = true;
      if (updatedScoreIdHash.upvoted[comment.id]) {
        updatedScoreIdHash.downvoted[comment.id] = false;
      }
      updatedScoreIdHash.upvoted[comment.id] = false;
    }
    setScoreIdHash(updatedScoreIdHash);
    handleUpvote(comment);
  };

  return (
    <section className="app-container">
      <CurrentUserContext.Provider value={currentUser}>
        <CommentList
          comments={comments}
          onUpvote={handleScoreUpdate}
          onDelete={handleDeleteFlow}
          onUpdate={handleUpdate}
          onReply={handleReply}
        />
        <AddComment onSend={handleCommentSend} />
      </CurrentUserContext.Provider>
      {commentDeleteFlow && (
        <Dialog>
          <DeleteComment onClick={handleDialogClick} />
        </Dialog>
      )}
    </section>
  );
};

export default App;
