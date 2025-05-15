import React, { useState } from "react";

interface MessageWindowProps {
    username: string;
    addMessage: (message: { username: string; chat: string; date: Date }) => void;
}

const MessageWindow = ({ username, addMessage }:MessageWindowProps) => {

    const [messages, setMessages] = useState('');

    const SendBtn = () => {
        if (messages.trim()) {
            const newMessage = {
                username,
                chat: messages,
                date: new Date(),
            };
            addMessage(newMessage);
            setMessages(''); 
        }
    };

    const DeleteBtn = () => {
        setMessages ('');
    }

    return(
        <div>
            <input 
                type="text"  
                value={messages}
                onChange={(e)=> setMessages(e.target.value)}
            />

            <button className="SendBtn" onClick={SendBtn}>Send</button>
            <button className="DeleteBtn" onClick={DeleteBtn}>Delete</button>
        </div>
    )
}

export default MessageWindow;