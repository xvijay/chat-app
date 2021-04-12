import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const { chatId, creds } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };

  const handleUpload = (event) => {
    console.log(event.target.files);
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="send ..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></input>

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon"></PictureOutlined>
        </span>
      </label>
      <input
        type="file"
        multiple={true}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      ></input>

      <button type="submit" className="send-button">
        <SendOutlined
          className="send-icon"
          style={{ transform: "rotate(0deg)" }}
        ></SendOutlined>
      </button>
    </form>
  );
};

export default MessageForm;
