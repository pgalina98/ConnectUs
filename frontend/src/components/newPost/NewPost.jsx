import React from "react";
import "./newPost.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function NewPost() {
  return (
    <div className="newPostContainer">
      <div className="newPostWrapper">
        <div className="newPostTop">
          <img
            src="/assets/profile_pictures/profile_picture_1.jpg"
            alt=""
            className="newPostProfileImage"
          />
          <input
            type="text"
            placeholder="What's in Your mind Jane?"
            className="newPostInputText"
          />
        </div>
        <hr className="newPostHR" />
        <div className="newPostBottom">
          <div className="newPostOptions">
            <div className="newPostOption">
              <PermMedia htmlColor="tomato" className="newPostOptionIcon" />
              <span className="newPostOptionText">Photo or Video</span>
            </div>
            <div className="newPostOption">
              <Label htmlColor="blue" className="newPostOptionIcon" />
              <span className="newPostOptionText">Tag</span>
            </div>
            <div className="newPostOption">
              <Room htmlColor="green" className="newPostOptionIcon" />
              <span className="newPostOptionText">Location</span>
            </div>
            <div className="newPostOption">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="newPostOptionIcon"
              />
              <span className="newPostOptionText">Feelings</span>
            </div>
          </div>
          <button className="newPostSubmitButton">Share</button>
        </div>
      </div>
    </div>
  );
}
