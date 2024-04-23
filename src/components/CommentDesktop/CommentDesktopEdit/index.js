import "./index.scss";
import React from "react";
import TextArea from "~/components/TextArea";
import Button from "~/components/Button";

const CommentDesktopEdit = () => {
  let commentText = `@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant`;

  return (
    <section className="comment-desktop-edit-container">
      <TextArea text={commentText} />
      <div className="button-container">
        <Button text={"Update"} />
      </div>
    </section>
  );
};

export default CommentDesktopEdit;
