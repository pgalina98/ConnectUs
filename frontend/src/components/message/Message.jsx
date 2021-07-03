import React from "react";
import "./message.css";

export default function Message({ myMessage }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  return (
    <div className={myMessage ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src={ASSETS_FOLDER_URI + "/profile_pictures/profile_picture_1.jpg"}
          alt=""
          className="messageTopBadge"
        />
        <p className="messageTopText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
