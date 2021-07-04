import React, { useContext, useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import OnlineUser from "../../components/onlineUser/OnlineUser";
import { Button } from "@material-ui/core";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { UserContext } from "../../context/UserContext";
import api from "../../utils/api";
import "./messenger.css";

export default function Messenger() {
  const { user } = useContext(UserContext);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      await api
        .get("/conversations/" + user._id)
        .then(({ data }) => setConversations(data))
        .catch((error) => {
          console.log(error);
        });
    };

    getConversations();
  }, [user?._id]);

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
            {conversations.map((conversation) => (
              <Conversation
                key={conversation._id}
                conversation={conversation}
              />
            ))}
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
