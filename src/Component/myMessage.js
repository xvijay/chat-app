import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0)
    return message.attachments.map((key) => (
      <img
        key={key.id}
        src={key.file}
        className="message-image"
        style={{ float: "right" }}
        alt="chat"
      ></img>
    ));
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
