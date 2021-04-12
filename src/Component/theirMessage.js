import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const firstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {firstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        ></div>
      )}
      {message?.attachments?.length > 0 ? (
        message.attachments.map((key) => (
          <img
            key={key.id}
            src={key.file}
            alt="Chat"
            className="message-image"
            style={{ marginLeft: firstMessageByUser ? "14px" : "48px" }}
          ></img>
        ))
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#cabcdc",
            marginLeft: firstMessageByUser ? "14px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
