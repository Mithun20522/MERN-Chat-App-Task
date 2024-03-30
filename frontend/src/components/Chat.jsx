import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import socket from '../socket';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  

  return (
    <section>
        <Conversation messages ={messages}/>
    </section>
  )
}

export default Chat