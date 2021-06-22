import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyData";
import OnlineUser from "../onlineUser/OnlineUser";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
