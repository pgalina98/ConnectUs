import React from "react";
import "./leftbar.css";
import {
  RssFeed,
  PlayCircleFilledOutlined,
  Chat,
  Group,
  Bookmark,
  ContactSupport,
  WorkOutlined,
  EventNote,
  School,
} from "@material-ui/icons";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarListIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarListIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarListIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarListIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarListIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <ContactSupport className="leftbarListIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutlined className="leftbarListIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventNote className="leftbarListIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarListIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHR" />
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
        <ul className="leftbarFriendList">
          <li className="leftbarFriendListItem">
            <img
              src="/assets/profile_pictures/profile_picture_2.jpg"
              alt=""
              className="leftbarFriendProfilePicture"
            />
            <span className="leftbarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
