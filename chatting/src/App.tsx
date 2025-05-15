import React, {useState} from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Message from './components/Message';
import MessageWindow from './components/MessageWindow';

interface MessageType {
  username: string;
  chat: string;
  date: Date;
}

function App() {

  const [username, setUsername] = useState('');

  const handleLogin = (name: string) => {
    setUsername(name); 
  };

    const [messages, setMessages] = useState<MessageType[]>([]);

    const addMessage = (newMessage: MessageType) => {
        setMessages([...messages, newMessage]);
    };
    
  return (
    <div className="App">
      <UserInfo login={handleLogin}/>
      <Message messages={messages} />
      <MessageWindow username={username} addMessage={addMessage}/>
    </div>
  );
}

export default App;
