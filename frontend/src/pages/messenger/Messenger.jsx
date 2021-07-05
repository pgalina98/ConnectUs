import React, { useContext, useState, useRef, useEffect } from "react";
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
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [selectedConversationMessages, setSelectedConversationMessages] =
    useState([]);
  const [newMessageText, setNewMessageText] = useState("");

  const scrollRef = useRef();

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

  useEffect(() => {
    const getChatMessages = async () => {
      await api
        .get("/messages/" + selectedConversation?._id)
        .then(({ data }) => setSelectedConversationMessages(data))
        .catch((error) => console.log(error));
    };

    getChatMessages();
  }, [selectedConversation]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConversationMessages]);

  const handleNewMessageSubmit = async (event) => {
    event.preventDefault();

    const newMessage = {
      conversationId: selectedConversation._id,
      senderId: user._id,
      messageText: newMessageText,
    };

    await api
      .post("/messages", newMessage)
      .then(({ data }) => {
        setSelectedConversationMessages([
          ...selectedConversationMessages,
          data,
        ]);
        setNewMessageText("");
      })
      .catch((error) => {
        console.log(error);
      });
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
            {conversations.map((conversation) => (
              <div onClick={() => setSelectedConversation(conversation)}>
                <Conversation
                  key={conversation._id}
                  conversation={conversation}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="messengerContainerChatMessages">
          <div className="messengerContainerChatMessagesWrapper">
            {selectedConversation ? (
              <>
                <div className="messengerContainerChatMessagesTop">
                  {selectedConversationMessages.map((message) => (
                    <div ref={scrollRef}>
                      <Message
                        message={message}
                        myMessage={message.senderId === user._id}
                        userId={
                          message.senderId === user._id
                            ? user._id
                            : selectedConversation.members.find(
                                (userId) => userId !== user._id
                              )
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="messengerContainerChatMessagesBottom">
                  <input
                    placeholder="Aa"
                    className="messengerContainerChatMessagesInput"
                    value={newMessageText}
                    onChange={(event) => setNewMessageText(event.target.value)}
                  />
                  <Button
                    className="messengerContainerChatMessagesSendMessageButton"
                    variant="contained"
                    color="primary"
                    endIcon={<SendRoundedIcon />}
                    onClick={handleNewMessageSubmit}
                  >
                    Send
                  </Button>
                </div>
              </>
            ) : (
              <span className="messengerContainerChatMessagesConversationNotSelectedMessage">
                Choose a conversation from list to start a Chat!{" "}
              </span>
            )}
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
