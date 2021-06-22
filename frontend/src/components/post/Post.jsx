import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/profile_pictures/profile_picture_1.jpg"
              alt=""
              className="postTopLeftProfilePicture"
            />
            <span className="postTopLeftUsername">Jane Doe</span>
            <span className="postTopLeftTimeAgo">5 mins ago</span>
          </div>
          <div className="postLeftRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">
            Heeeey! This is example of Post component
          </span>
          <img
            src="/assets/post_pictures/post_picture_1.jpg"
            alt=""
            className="postCenterImage"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/post_reaction_pictures/like_reaction.png"
              alt=""
              className="postBottomLeftIcon"
            />
            <img
              src="/assets/post_reaction_pictures/love_reaction.png"
              alt=""
              className="postBottomLeftIcon"
            />
            <span className="postBottomLeftLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomRightComments">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
