import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./Component/chatfeed";
import LoginForm from "./Component/loginForm";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm></LoginForm>;
  return (
    <ChatEngine
      height="100vh"
      projectID="6de55229-f85b-41dd-9ee8-98df51304b03"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
