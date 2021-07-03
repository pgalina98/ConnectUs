import React, { useEffect, useState, useContext } from "react";
import api from "../../utils/api";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./feed.css";
import { UserContext } from "../../context/UserContext";

const moment = require("moment");

export default function Feed({ userId }) {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTimelinePosts = async () => {
      userId
        ? await api
            .get("/posts/profile/" + userId)
            .then(({ data }) => {
              setPosts(
                data.sort((a, b) =>
                  moment(a.updatedAt).isBefore(b.updatedAt)
                    ? 1
                    : moment(a.updatedAt).isAfter(b.updatedAt)
                    ? -1
                    : 0
                )
              );
            })
            .catch((error) => console.log("LOG [ERROR]: " + error))
        : await api
            .get("/posts/timeline/" + user._id)
            .then(({ data }) => {
              setPosts(
                data.sort((a, b) =>
                  moment(a.updatedAt).isBefore(b.updatedAt)
                    ? 1
                    : moment(a.updatedAt).isAfter(b.updatedAt)
                    ? -1
                    : 0
                )
              );
            })
            .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    getTimelinePosts();
  }, [user._id, userId]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!userId || userId === user._id) && <NewPost />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
