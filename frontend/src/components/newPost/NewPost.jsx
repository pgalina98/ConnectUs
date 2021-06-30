import React, { useContext, useState } from "react";
import "./newPost.css";
import { CircularProgress } from "@material-ui/core";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthorizationContext";
import api from "../../utils/api";

export default function NewPost() {
  const ASSETS_FOLDER_URI = process.env.REACT_APP_ASSETS_URI;
  const { user } = useContext(AuthContext);

  const [isPosting, setIsPosting] = useState(false);
  const [postDescription, setPostDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleNewPostSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: postDescription,
    };

    setIsPosting(true);

    if (file) {
      const data = new FormData();
      const filename = Date.now() + "_" + file.name;
      data.append("filename", filename);
      data.append("file", file);
      newPost.image = "post_pictures/" + filename;

      await api
        .post("/posts/uploadFile", data)
        .then(({ data }) => console.log(data))
        .catch((error) => {
          console.log("ERROR:" + error);
        })
        .finally(() => {
          setIsPosting(false);
        });
    }

    await api
      .post("/posts", newPost)
      .then(({ data }) => console.log(data))
      .catch((error) => {
        console.log("ERROR:" + error);
      })
      .finally(() => {
        setIsPosting(false);
        //window.location.reload();
      });
  };

  return (
    <div className="newPostContainer">
      <div className="newPostWrapper">
        <div className="newPostTop">
          <img
            src={
              user.profilePicture
                ? ASSETS_FOLDER_URI + user.profilePicture
                : ASSETS_FOLDER_URI +
                  "profile_pictures/profile_picture_default.jpg"
            }
            alt=""
            className="newPostProfileImage"
          />
          <input
            type="text"
            placeholder={"What's in Your mind " + user.username + "?"}
            className="newPostInputText"
            onChange={(event) => setPostDescription(event.target.value)}
          />
        </div>
        <hr className="newPostHR" />
        <form className="newPostBottom" onSubmit={handleNewPostSubmit}>
          <div className="newPostOptions">
            <label htmlFor="file" className="newPostOption">
              <PermMedia htmlColor="tomato" className="newPostOptionIcon" />
              <span className="newPostOptionText">Photo or Video</span>
              <input
                id="file"
                type="file"
                style={{ display: "none" }}
                accept=".png,.jpeg,.jpg"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </label>
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
          <button
            type="submit"
            className="newPostSubmitButton"
            disabled={isPosting}
          >
            {isPosting ? (
              <CircularProgress style={{ color: "white" }} size="24px" />
            ) : (
              "Share"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
