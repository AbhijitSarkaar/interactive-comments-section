import "./index.scss";
import React from "react";

import AddCommentMobile from "~/components/AddCommentMobile";
import DeleteComment from "~/components/DeleteComment";
import CommentMobile from "~/components/CommentMobile";

import CommentDesktop from "~/components/CommentDesktop";
import AddCommentDesktop from "~/components/AddCommentDesktop";

const App = () => {
  return (
    <section className="app-container">
      <CommentDesktop />
      <AddCommentDesktop />
    </section>
  );
};

export default App;
