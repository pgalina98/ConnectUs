import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyData";
import OnlineUser from "../onlineUser/OnlineUser";

export default function Rightbar({ user }) {
  const HomepageRightbar = () => {
    return (
      <>
        <div className="rightbarBirthdaysContainer">
          <img
            src="/assets/birthday_gift.png"
            alt=""
            className="rightbarBirthdayImage"
          />
          <span className="rightbarBirthdayText">
            <b>John Doe</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/starbucks_ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarOnlineFriendsList">
          {Users.map((user) => (
            <OnlineUser key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="profileRightbarTitle">User Information</h4>
        <div className="profileRightbarUserInfo">
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">City:</span>
            <span className="profileRightbarUserInfoValue">{user.city}</span>
          </div>
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">From:</span>
            <span className="profileRightbarUserInfoValue">{user.from}</span>
          </div>
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">Relationship:</span>
            <span className="profileRightbarUserInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Complicated"}
            </span>
          </div>
        </div>
        <h4 className="profileRightbarTitle">User Friends</h4>
        <div className="profileRightbarFriends">
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_3.jpg"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">
              Jasmine Doe
            </span>
          </div>
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_4.png"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">
              Ana-Marie Doe
            </span>
          </div>
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_5.jpg"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">John Doe</span>
          </div>
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_3.jpg"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">
              Jasmine Doe
            </span>
          </div>
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_4.png"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">
              Ana-Marie Doe
            </span>
          </div>
          <div className="profileRightbarFriendItem">
            <img
              src="/assets/profile_pictures/profile_picture_5.jpg"
              alt=""
              className="profileRightbarFriendItemImage"
            />
            <span className="profileRightbarFriendItemUsername">John Doe</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomepageRightbar />}
      </div>
    </div>
  );
}
