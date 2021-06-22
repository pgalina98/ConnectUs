import React from "react";
import "./onlineUser.css";
import { Telegram } from "@material-ui/icons";

export default function OnlineUser({ user }) {
  return (
    <li className="rightbarOnlineFriendsListItem">
      <div className="rightbarOnlineFriendsProfileImageContainer">
        <img
          src={user.profilePicture}
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
