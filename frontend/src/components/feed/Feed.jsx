import React from "react";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../DummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <NewPost />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
