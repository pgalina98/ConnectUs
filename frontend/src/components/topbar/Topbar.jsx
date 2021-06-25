import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="topbarLeftLink">
          <span className="topbarLogo">Connect Us</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="topbarSearchBar">
          <Search className="topbarSearchBarIcon" />
          <input
            type="text"
            placeholder="Search for friends, posts or videos"
            className="topbarSearchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconItemBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconItemBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconItemBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/profile_pictures/profile_picture_1.jpg"
          alt=""
          className="topbarImage"
        />
      </div>
    </div>
  );
}
