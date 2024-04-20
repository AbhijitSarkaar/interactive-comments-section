import "./index.scss";

import React from "react";
import AddCommentMobile from "../AddCommentMobile";
import DeleteComment from "../DeleteComment";
import CommentMobile from "../CommentMobile";

const App = () => {
  return (
    <section className="app-container">
      <CommentMobile />
    </section>
  );
};

export default App;
