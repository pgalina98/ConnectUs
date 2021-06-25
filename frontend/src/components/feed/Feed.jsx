import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTimelinePosts = async () => {
      //TODO -> User ID must be fetched dynamically from Context
      await api
        .get("/posts/timeline/60cf759612e2ca311475ba4f")
        .then(({ data }) => setPosts(data))
        .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    getTimelinePosts();
  }, []);

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
