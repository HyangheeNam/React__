import React, {useRef, useEffect} from "react";

interface MessageProps {
    messages: { username: string; chat: string; date: Date }[];
}


const Message = ({ messages }:MessageProps) => {

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);
    
    return (
        <div>
            {messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <strong>{msg.username}</strong>: {msg.chat} {msg.date.toLocaleTimeString()}
                </div>
            ))}
        </div>
    );
}

export default Message;