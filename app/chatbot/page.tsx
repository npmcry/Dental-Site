'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Remove AnimatePresence if not using
import Image from 'next/image';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  options?: string[];
};

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting
    setMessages([{
      id: 1,
      text: "Hi! 👋 How can I help you today?",
      sender: 'bot',
      options: ['Book Appointment', 'Services', 'Contact']
    }]);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: option,
      sender: 'user'
    }]);

    // Bot response
    setTimeout(() => {
      let response = '';
      let options: string[] = [];

      switch (option) {
        case 'Book Appointment':
          response = "Would you like to book online or call us?";
          options = ['Book Online', 'Call Now', 'Back'];
          break;
        case 'Services':
          response = "We offer various dental services:";
          options = ['Cosmetic', 'General', 'Emergency', 'Back'];
          break;
        case 'Contact':
          response = "You can reach us at:\n📞 916-259-1701\n📍 Paradise, CA";
          options = ['Book Appointment', 'Back'];
          break;
        default:
          response = "How else can I help you?";
          options = ['Book Appointment', 'Services', 'Contact'];
      }

      setMessages(prev => [...prev, {
        id: Date.now(),
        text: response,
        sender: 'bot',
        options
      }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col w-[350px] h-[500px] bg-white rounded-[20px] shadow-xl overflow-hidden">
      {/* Header */}
      <div className="blue-gradient p-4 flex items-center space-x-3">
        <Image
          src="/logo.png"
          alt="Paradise Dental"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-white">
          <h3 className="font-bold">Paradise Dental Assistant</h3>
          <p className="text-sm opacity-90">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-[16px] p-3 ${
                message.sender === 'user'
                  ? 'bg-[#2469FD] text-white'
                  : 'bg-[#F4F4F5] text-gray-800'
              }`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              {message.options && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {message.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="px-3 py-1.5 rounded-full bg-white text-[#2469FD] text-sm
                        hover:bg-[#EBF2FF] transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.trim()) return;
            
            handleOptionClick(input);
            setInput('');
          }}
          className="flex space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#2469FD]"
          />
          <button
            type="submit"
            className="p-2 rounded-full blue-gradient text-white hover:opacity-90 transition-opacity"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}