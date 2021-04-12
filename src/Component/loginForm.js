import { useState } from "react";
import axios from "axios";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObj = {
      "Project-ID": "6de55229-f85b-41dd-9ee8-98df51304b03",
      "User-Name": userName,
      "User-Secret": password,
    };

    try {
      await axios
        .get("https://api.chatengine.io/chats/", { headers: authObj })
        .then((res) => {
          console.log(res);
          localStorage.setItem("userName", userName);
          localStorage.setItem("password", password);
          window.location.reload();
        });
    } catch (err) {
      setError("Incorrect");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            className="input"
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          ></input>
          <div align="center">
            <button type="submit" className="button">
              <span>Start</span>
            </button>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
