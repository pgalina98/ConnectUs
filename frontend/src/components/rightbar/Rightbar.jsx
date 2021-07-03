import React, { useState, useEffect, useContext } from "react";
import "./rightbar.css";
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import OnlineUser from "../onlineUser/OnlineUser";
import api from "../../utils/api";
import { UserContext } from "../../context/UserContext";
import UserFollowing from "../userFollowing/UserFollowing";

export default function Rightbar({ user }) {
  const { user: loggedUser, dispatch } = useContext(UserContext);

  const [onlineFollowings, setOnlineFollowings] = useState([]);
  const [userFollowings, setUserFollowings] = useState([]);

  useEffect(() => {
    const getUserFollowings = async () => {
      await api
        .get("/users/" + user._id + "/followings")
        .then(({ data }) => {
          setUserFollowings(data);
        })
        .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    //TODO -> Fetch online Users using Socket.io
    const getOnlineUserFollowings = async () => {
      await api
        .get("/users/" + loggedUser._id + "/followings")
        .then(({ data }) => {
          setOnlineFollowings(data);
        })
        .catch((error) => console.log("LOG [ERROR]: " + error));
    };

    user ? getUserFollowings() : getOnlineUserFollowings();
  }, [loggedUser._id, user]);

  const HomepageRightbar = () => {
    return (
      <>
        <div className="rightbarBirthdaysContainer">
          <img
            src="/assets/birthday_gift.png"
            alt=""
            className="rightbarBirthdayImage"
          />
          <span className="rightbarBirthdayText">
            <b>John Doe</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/starbucks_ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarOnlineFriendsList">
          {onlineFollowings.map((user) => (
            <OnlineUser key={user._id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const [isFollowing, setIsFollowing] = useState(
      loggedUser.following.includes(user?._id)
    );

    const handleFollowUnfollowButtonClick = async () => {
      if (!isFollowing) {
        await api
          .put("/users/follow/" + user?._id, { userId: loggedUser._id })
          .then(({ data }) => console.log(data))
          .catch((error) => console.log(error));

        dispatch({ type: "FOLLOW_USER", payload: user._id });
      } else {
        await api
          .put("/users/unfollow/" + user._id, { userId: loggedUser._id })
          .then(({ data }) => console.log(data))
          .catch((error) => console.log(error));

        dispatch({ type: "UNFOLLOW_USER", payload: user._id });
      }

      setIsFollowing(!isFollowing);
    };

    return (
      <>
        {user._id !== loggedUser._id && (
          <Button
            className="profileRightbarFollowButton"
            variant="contained"
            color="primary"
            endIcon={isFollowing ? <Remove /> : <Add />}
            onClick={handleFollowUnfollowButtonClick}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}

        <h4 className="profileRightbarTitle">User Information</h4>
        <div className="profileRightbarUserInfo">
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">City:</span>
            <span className="profileRightbarUserInfoValue">{user.city}</span>
          </div>
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">From:</span>
            <span className="profileRightbarUserInfoValue">{user.from}</span>
          </div>
          <div className="profileRightbarUserInfoItem">
            <span className="profileRightbarUserInfoKey">Relationship:</span>
            <span className="profileRightbarUserInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Complicated"}
            </span>
          </div>
        </div>
        <h4 className="profileRightbarTitle">User Followings</h4>
        <div className="profileRightbarFriends">
          {userFollowings.map((user) => (
            <UserFollowing key={user._id} user={user} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomepageRightbar />}
      </div>
    </div>
  );
}
