import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import api from "../../utils/api";
import "./profile.css";

export default function Profile() {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      await api
        .get("/users/" + userId)
        .then(({ data }) => setUser(data))
        .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    getUserById();
  }, [userId]);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="containerRight">
          <div className="containerRightTop">
            <div className="containerRightTopPictures">
              <img
                src={
                  user.coverPicture
                    ? ASSETS_FOLDER_URI + user.coverPicture
                    : ASSETS_FOLDER_URI +
                      "cover_pictures/cover_picture_default.jpg"
                }
                alt=""
                className="containerRightTopCoverPicture"
              />
              <img
                src={
                  user.profilePicture
                    ? ASSETS_FOLDER_URI + user.profilePicture
                    : ASSETS_FOLDER_URI +
                      "profile_pictures/profile_picture_default.jpg"
                }
                alt=""
                className="containerRightTopProfilePicture"
              />
            </div>
            <div className="containerRightTopUserInfo">
              <h4 className="containerRightTopUserInfoName">{user.username}</h4>
              <span className="containerRightTopUserInfoDescription">
                {user.description}
              </span>
            </div>
          </div>
          <div className="containerRightBottom">
            <Feed userId={userId} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
