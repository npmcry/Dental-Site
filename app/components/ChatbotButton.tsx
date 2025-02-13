'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ChatbotPage = dynamic(() => import('../chatbot/page'), {
  ssr: false,
});

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-20 h-20 rounded-full blue-gradient shadow-xl 
          flex items-center justify-center z-50 hover:scale-105 transition-transform"
      >
        <Image
          src="/icons/chat.png"
          alt="Chat with Paradise Dental"
          width={48}
          height={48}
          priority
          className="w-12 h-12"
        />
      </button>

      {isOpen && <ChatbotPage />}
    </>
  );
}