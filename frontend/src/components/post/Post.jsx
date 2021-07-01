import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import api from "../../utils/api";
import "./post.css";
import { UserContext } from "../../context/UserContext";

export default function Post({ post }) {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;
  const { user: loggedUser } = useContext(UserContext);

  const [user, setUser] = useState({});
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(loggedUser._id));
  }, [loggedUser._id, post.likes]);

  useEffect(() => {
    const getUserById = async () => {
      const userId = post.userId;
      await api
        .get("/users/" + userId)
        .then(({ data }) => setUser(data))
        .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    getUserById();
  }, [post.userId]);

  const likeButtonHandler = async () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(isLiked ? false : true);

    await api
      .put("/posts/like/" + post._id, { userId: loggedUser._id })
      .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* TODO -> Fetch current user ID from context */}
            <Link to={"/profile/" + post.userId}>
              <img
                src={
                  user.profilePicture
                    ? ASSETS_FOLDER_URI + user.profilePicture
                    : ASSETS_FOLDER_URI +
                      "profile_pictures/profile_picture_default.jpg"
                }
                alt=""
                className="postTopLeftProfilePicture"
              />
            </Link>
            <span className="postTopLeftUsername">{user.username}</span>
            <span className="postTopLeftTimeAgo">{format(post.createdAt)}</span>
          </div>
          <div className="postLeftRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.description}</span>
          <img
            src={ASSETS_FOLDER_URI + post?.image}
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
              {/* TODO -> Post model need to be updated - ADD comments property to model */}
              0 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
