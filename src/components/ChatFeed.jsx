import React from 'react';
import MessageForm from './MessageForm';
import TheirMessage from './TheirMessage';
import MyMessage from './MyMessage';


const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props; 

  const chat = chats &&  chats[activeChat]; 
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0? null: keys[index - 1];
      const userName = message.sender.username;
    })
  }
  return (
    <div>ChatFeed</div>
  )
}
export {ChatFeed};