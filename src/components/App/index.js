import "./index.scss";

import React from "react";

import AddCommentMobile from "~/components/AddCommentMobile";
import DeleteComment from "~/components/DeleteComment";
import CommentMobile from "~/components/CommentMobile";

import CommentDesktop from "~/components/CommentDesktop";

const App = () => {
  return (
    <section className="app-container">
      <CommentDesktop />
    </section>
  );
};

export default App;
