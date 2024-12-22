import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send } from 'lucide-react';

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

export default function Grok() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm Grok, your AI assistant. How can I help you today?",
      timestamp: '2m',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: "I'm processing your request. As this is a demo, I can't provide a real response, but in the actual implementation, I would analyze your message and respond appropriately.",
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Bot className="h-8 w-8 text-blue-500" />
          <div>
            <h1 className="text-xl font-bold">Grok</h1>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-sm opacity-70 mt-2 block">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message Grok..."
              className="w-full bg-gray-900 rounded-full py-3 px-6 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}