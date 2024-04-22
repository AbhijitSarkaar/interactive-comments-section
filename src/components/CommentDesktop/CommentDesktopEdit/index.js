import "./index.scss";
import React, { useState } from "react";

const CommentDesktopEdit = () => {
  const [rows, setRows] = useState(3);

  return (
    <section className="comment-desktop-edit-container">
      <div className="grow-wrap">
        <textarea
          rows={rows}
          value={`@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant`}
        ></textarea>
      </div>

      <div className="button-container">
        <button>Update</button>
      </div>
    </section>
  );
};

export default CommentDesktopEdit;
