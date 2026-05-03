'use client';

import { useState } from 'react';
import ChatModal from './ChatModal';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <button
        type="button"
        aria-label={isOpen ? 'Chiudi chat' : 'Apri chat'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full
                    border border-white/10 bg-gradient-to-br from-[#e8b57e] to-[#c98e54] text-[#1a1108]
                    shadow-[0_18px_60px_-12px_rgba(232,181,126,0.55)]
                    transition-transform duration-300 ease-out
                    hover:scale-[1.06] active:scale-95
                    ${isOpen ? '' : 'vela-fab-glow'}`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            />
            <circle cx="9" cy="11" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="12" cy="11" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="15" cy="11" r="0.9" fill="currentColor" stroke="none" />
          </svg>
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </span>
      </button>
    </>
  );
}
