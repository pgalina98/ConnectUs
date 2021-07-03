import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import OnlineUser from "../../components/onlineUser/OnlineUser";
import { Button } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import "./messenger.css";

export default function Messenger() {
  const user = {
    username: "John Doe",
    profilePicture: "profile_pictures/profile_picture_6.jpg",
  };

  return (
    <>
      <Topbar />
      <div className="messengerContainer">
        <div className="messengerContainerChatMenu">
          <div className="messengerContainerChatMenuWrapper">
            <input
              type="text"
              placeholder="Search for conversations"
              className="messengerContainerChatMenuSearchFriends"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="messengerContainerChatMessages">
          <div className="messengerContainerChatMessagesWrapper">
            <div className="messengerContainerChatMessagesTop">
              <Message />
              <Message myMessage={true} />
              <Message myMessage={true} />
              <Message />
            </div>
            <div className="messengerContainerChatMessagesBottom">
              <input
                placeholder="Aa"
                className="messengerContainerChatMessagesInput"
              />
              <Button
                className="messengerContainerChatMessagesSendMessageButton"
                variant="contained"
                color="primary"
                endIcon={<SendRoundedIcon />}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="messengerContainerChatOnlineFriends">
          <div className="messengerContainerChatOnlineFriendsWrapper">
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
            <OnlineUser user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
