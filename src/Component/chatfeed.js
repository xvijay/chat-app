import React from "react";
import { LogoutOutlined } from "@ant-design/icons";

import MessageForm from "./messageForm";
import MyMessage from "./myMessage";
import TheirMessage from "./theirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipt = (message, myMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={index}
            className="read-receipt"
            style={{
              float: myMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          ></div>
        )
    );
  };

  const renderMessage = () => {
    if (messages !== undefined) {
      const keys = Object.keys(messages);

      return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        const myMessage = message.sender.username === userName;

        return (
          <div key={`key-${index}`}>
            <div className="message-block" style={{ width: "100%" }}>
              {myMessage ? (
                <MyMessage message={message}></MyMessage>
              ) : (
                <TheirMessage
                  message={message}
                  lastMessage={message[lastMessageKey]}
                ></TheirMessage>
              )}
            </div>
            <div
              className="read-receipts"
              style={{
                marginRight: myMessage ? "18px" : "0px",
                marginLeft: myMessage ? "0px" : "68px",
              }}
            >
              {renderReadReceipt(message, myMessage)}
            </div>
          </div>
        );
      });
    }
    return "Loading .....";
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    window.location.reload();
  };

  if (!chat) return "Loading ....";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div
          className="chat-logout"
          title="logout"
          style={{ cursor: "pointer", transform: "rotate(270deg)" }}
          onClick={handleLogout}
        >
          <LogoutOutlined />
        </div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username} `)}
        </div>
      </div>
      {renderMessage()}
      <div style={{ height: "100px" }}> </div>

      <div className="message-fomr-container">
        <MessageForm {...props} chatId={activeChat}></MessageForm>
      </div>
    </div>
  );
};

export default ChatFeed;
