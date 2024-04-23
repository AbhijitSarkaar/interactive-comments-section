import "./index.scss";
import React, { useState } from "react";
import CommentList from "~/components/CommentList";
import AddCommentDesktop from "~/components/AddCommentDesktop";
import { CurrentUserContext } from "~/contexts/CurrentUserContext.js";
import data from "~/data/data.json";

const App = () => {
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);

  const handleCommentSend = (text) => {
    let currentComments = [...comments];
    currentComments.push({
      id: comments.length + 1,
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
      return item;
    });

    setComments(currentComments);
  };

  return (
    <section className="app-container">
      <CurrentUserContext.Provider value={currentUser}>
        <CommentList comments={comments} onUpvote={handleUpvote} />
      </CurrentUserContext.Provider>
      <AddCommentDesktop
        avatarUrl={currentUser.image.png}
        onSend={handleCommentSend}
      />
    </section>
  );
};

export default App;
