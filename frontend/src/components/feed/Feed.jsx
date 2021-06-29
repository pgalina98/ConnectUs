import React, { useEffect, useState, useContext } from "react";
import api from "../../utils/api";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./feed.css";
import { AuthContext } from "../../context/AuthorizationContext";

export default function Feed({ userId }) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTimelinePosts = async () => {
      //TODO -> User ID must be fetched dynamically from Context
      userId
        ? await api
            .get("/posts/profile/" + userId)
            .then(({ data }) => setPosts(data))
            .catch((error) => console.log("LOG [ERROR]: " + error))
        : await api
            .get("/posts/timeline/" + user._id)
            .then(({ data }) => setPosts(data))
            .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    getTimelinePosts();
  }, [user._id, userId]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <NewPost />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
