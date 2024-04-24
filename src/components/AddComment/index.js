import React from "react";
import AddCommentDesktop from "~/components/AddCommentDesktop";
import AddCommentMobile from "~/components/AddCommentMobile";

const AddComment = (props) => {
  return (
    <section className="add-comment-container">
      <AddCommentDesktop {...props} />
      <AddCommentMobile {...props} />
    </section>
  );
};

export default AddComment;
