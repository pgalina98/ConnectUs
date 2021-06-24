import React from "react";
import "./homepage.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="homepageContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
