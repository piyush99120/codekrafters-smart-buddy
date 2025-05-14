
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

const ChatbotModal = () => {
  const [messages, setMessages] = useState([
    { 
      sender: "bot",
      text: "Hi there! I'm the CodeKrafters assistant. How can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (inputMessage.trim() === "") return;
    
    // Add user message
    setMessages([...messages, { sender: "user", text: inputMessage }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          sender: "bot", 
          text: "Thanks for your message! This is a demo of the chatbot interface. In a real implementation, this would connect to your AI backend."
        }
      ]);
    }, 1000);
    
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle size={24} />
          <h2 className="text-lg font-semibold">CodeKrafters Assistant</h2>
        </div>
        <div className="text-sm">Online</div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.sender === "bot" ? "flex" : "flex justify-end"}`}
          >
            {message.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                <MessageCircle size={16} />
              </div>
            )}
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === "bot" 
                  ? "bg-white text-gray-800 shadow-sm" 
                  : "bg-blue-600 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Send
          </Button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Powered by CodeKrafters AI
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
