import React from "react";
import "./onlineUser.css";

export default function OnlineUser({ user }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  return (
    <li className="rightbarOnlineFriendsListItem">
      <div className="rightbarOnlineFriendsProfileImageContainer">
        <img
          src={
            user?.profilePicture
              ? ASSETS_FOLDER_URI + user.profilePicture
              : ASSETS_FOLDER_URI +
                "profile_pictures/profile_picture_default.jpg"
          }
          alt=""
          className="rightbarOnlineFriendsProfileImage"
        />
        <span className="rightbarOnlineFriendsBadge"></span>
      </div>
      <span className="rightbarOnlineFriendsUsername">{user.username}</span>
    </li>
  );
}
