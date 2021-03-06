import React from 'react';
import { ChatEngine } from "react-chat-engine";
import { ChatFeed } from './components/ChatFeed'; 
import './App.css';


const App = () => {
  return (
    <ChatEngine
      height=""
      projectID=""
      userName=""
      userSecret=""
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App