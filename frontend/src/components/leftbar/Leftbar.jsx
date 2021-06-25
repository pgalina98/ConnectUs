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
import { Users } from "../../DummyData";

export default function Leftbar() {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

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
          {Users.map((user) => (
            <li key={user.id} className="leftbarFriendListItem">
              <img
                src={ASSETS_FOLDER_URI + user.profilePicture}
                alt=""
                className="leftbarFriendProfilePicture"
              />
              <span className="leftbarFriendName">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
