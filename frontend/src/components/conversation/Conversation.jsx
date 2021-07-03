import React from "react";
import "./conversation.css";

export default function Conversation() {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  return (
    <div className="conversation">
      <img
        src={ASSETS_FOLDER_URI + "/profile_pictures/profile_picture_1.jpg"}
        alt=""
        className="conversationBadge"
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
}
