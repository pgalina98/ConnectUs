import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import api from "../../utils/api";
import "./conversation.css";

export default function Conversation({ conversation }) {
  const [userReceiver, setUserReceiver] = useState(null);
  const { user: loggedUser } = useContext(UserContext);
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  useEffect(() => {
    const userReceiverId = conversation.members.find(
      (userId) => userId !== loggedUser._id
    );

    const getUserReceiver = async () => {
      await api
        .get("/users/" + userReceiverId)
        .then(({ data }) => setUserReceiver(data))
        .catch((error) => {
          console.log(error);
        });
    };

    getUserReceiver();
  }, [conversation.members, loggedUser?._id]);

  return (
    <div className="conversation">
      <img
        src={
          userReceiver.profilePicture
            ? ASSETS_FOLDER_URI + userReceiver.profilePicture
            : ASSETS_FOLDER_URI + "profile_pictures/profile_picture_default.jpg"
        }
        alt=""
        className="conversationBadge"
      />
      <span className="conversationName">{userReceiver.username}</span>
    </div>
  );
}
