import React from "react";
import "./onlineUser.css";
import { Telegram } from "@material-ui/icons";

export default function OnlineUser({ user }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  return (
    <li className="rightbarOnlineFriendsListItem">
      <div className="rightbarOnlineFriendsProfileImageContainer">
        <img
          src={ASSETS_FOLDER_URI + user.profilePicture}
          alt=""
          className="rightbarOnlineFriendsProfileImage"
        />
        <span className="rightbarOnlineFriendsBadge"></span>
      </div>
      <span className="rightbarOnlineFriendsUsername">{user.username}</span>
      <Telegram className="rightbarMessageOnlineFriend" />
    </li>
  );
}
