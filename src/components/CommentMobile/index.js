import "./index.scss";
import React from "react";
import CommentMobileHeader from "~/components/CommentMobile/CommentMobileHeader";
import CommentMobileFooter from "~/components/CommentMobile/CommentMobileFooter";

const CommentMobile = () => {
  return (
    <section className="comment-mobile-container">
      <CommentMobileHeader />
      <p className="body-content">
        <span className="user">@ramsesmiron</span> I couldn’t agree more with
        this. Everything moves so fast and it always seems like everyone knows
        the newest library/framework. But the fundamentals are what stay
        constant.
      </p>
      <CommentMobileFooter />
    </section>
  );
};

export default CommentMobile;
