import React from "react";
import { Link } from "react-router-dom";
import "./userFollowing.css";

export default function UserFollowing({ user }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  return (
    <Link
      to={"/profile/" + user._id}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="profileRightbarFriendItem">
        <img
          src={
            user.profilePicture
              ? ASSETS_FOLDER_URI + user.profilePicture
              : ASSETS_FOLDER_URI +
                "profile_pictures/profile_picture_default.jpg"
          }
          alt=""
          className="profileRightbarFriendItemImage"
        />
        <span className="profileRightbarFriendItemUsername">
          {user.username}
        </span>
      </div>
    </Link>
  );
}
