import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import api from "../../utils/api";
import "./message.css";

export default function Message({ message, myMessage, userId }) {
  const [user, setUser] = useState(null);
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  useEffect(() => {
    const getUser = async () => {
      await api
        .get("/users/" + userId)
        .then(({ data }) => setUser(data))
        .catch((error) => console.log(error));
    };

    getUser();
  }, [userId]);

  return (
    <div className={myMessage ? "message own" : "message"}>
      <div className={myMessage ? "messageTop own" : "messageTop"}>
        <img
          src={
            user?.profilePicture
              ? ASSETS_FOLDER_URI + user.profilePicture
              : ASSETS_FOLDER_URI +
                "profile_pictures/profile_picture_default.jpg"
          }
          alt=""
          className={myMessage ? "messageTopBadge own" : "messageTopBadge"}
        />
        <p className="messageTopText">{message.messageText}</p>
      </div>
      <div className={myMessage ? "messageBottom own" : "messageBottom"}>
        {format(message.createdAt)}
      </div>
    </div>
  );
}
