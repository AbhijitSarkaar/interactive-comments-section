import "./index.scss";
import React, { useState } from "react";
import CommentList from "~/components/CommentList";
import AddCommentDesktop from "~/components/AddCommentDesktop";
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

  return (
    <section className="app-container">
      <CommentList comments={comments} />
      <AddCommentDesktop
        avatarUrl={currentUser.image.png}
        onSend={handleCommentSend}
      />
    </section>
  );
};

export default App;
