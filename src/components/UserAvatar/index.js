import "./index.scss";
import React from "react";

const UserAvatar = ({ src }) => {
  return <img src={src} alt="avatar" className="user-avatar" />;
};

export default UserAvatar;
