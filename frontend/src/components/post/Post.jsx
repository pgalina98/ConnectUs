import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../DummyData";

export default function Post({ post }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;

  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const user = Users.find((user) => user.id === post.userId);

  const likeButtonHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(isLiked ? false : true);
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={ASSETS_FOLDER_URI + user.profilePicture}
              alt=""
              className="postTopLeftProfilePicture"
            />
            <span className="postTopLeftUsername">{user.username}</span>
            <span className="postTopLeftTimeAgo">{post.date}</span>
          </div>
          <div className="postLeftRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img
            src={ASSETS_FOLDER_URI + post.photo}
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
              onClick={likeButtonHandler}
            />
            <img
              src="/assets/post_reaction_pictures/love_reaction.png"
              alt=""
              className="postBottomLeftIcon"
              onClick={likeButtonHandler}
            />
            <span className="postBottomLeftLikeCounter">
              {likes} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postBottomRightComments">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
