import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts/timeline/60cf759612e2ca311475ba4f")
      .then((data) => console.log("DATA: " + data))
      .catch((error) => console.log("LOG [ERROR]: " + error));
  }, [posts]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <NewPost />
        {/* {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))} */}
      </div>
    </div>
  );
}
