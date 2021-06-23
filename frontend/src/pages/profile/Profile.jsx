import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Leftbar />
        <div className="containerRight">
          <div className="containerRightTop">
            <div className="containerRightTopPictures">
              <img
                src="assets/post_pictures/post_picture_2.jpg"
                alt=""
                className="containerRightTopCoverPicture"
              />
              <img
                src="assets/profile_pictures/profile_picture_1.jpg"
                alt=""
                className="containerRightTopProfilePicture"
              />
            </div>
            <div className="containerRightTopUserInfo">
              <h4 className="containerRightTopUserInfoName">Jane Doe</h4>
              <span className="containerRightTopUserInfoDescription">
                Heeeey! I am a student at FER | Faculty of Electrical,
                Engineering and Computing who really enjoys codeing :)
              </span>
            </div>
          </div>
          <div className="containerRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
