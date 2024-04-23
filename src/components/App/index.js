import "./index.scss";
import React, { useState } from "react";
import CommentList from "~/components/CommentList";
import AddCommentDesktop from "~/components/AddCommentDesktop";
import data from "~/data/data.json";

const App = () => {
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [comments, setComments] = useState(data.comments);

  console.log(currentUser.image.png);

  return (
    <section className="app-container">
      <CommentList comments={comments} />
      <AddCommentDesktop avatarUrl={currentUser.image.png} />
    </section>
  );
};

export default App;
