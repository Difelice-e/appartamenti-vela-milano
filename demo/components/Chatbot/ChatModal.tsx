'use client';

import { useEffect, useRef, useState } from 'react';

const url = 'https://grybroker.app.n8n.cloud/webhook/chatbot-vela';

type Message = { id: number; sender: 'bot' | 'user'; text: string };

type ChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, sender: 'bot', text: 'Ciao, sono Vela. Dimmi pure — sono qui per aiutarti.' },
  ]);
  const [hasOpened, setHasOpened] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const idRef = useRef(1);

  useEffect(() => {
    if (isOpen) setHasOpened(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 280);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const cleanSpace = message.trim();
    if (cleanSpace === '') return;

    const userMessage: Message = { id: idRef.current++, sender: 'user', text: cleanSpace };
    setMessages((m) => [...m, userMessage]);
    setMessage('');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: cleanSpace }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const ct = res.headers.get('content-type') || '';
      let reply: string;
      if (ct.includes('application/json')) {
        const data = await res.json();
        reply = data.reply ?? data.output ?? data.message ?? data.text ?? JSON.stringify(data);
      } else {
        reply = await res.text();
      }
      setMessages((m) => [...m, { id: idRef.current++, sender: 'bot', text: String(reply) }]);
    } catch (err) {
      console.error('Errore chatbot:', err);
      setMessages((m) => [
        ...m,
        { id: idRef.current++, sender: 'bot', text: 'Qualcosa è andato storto. Riprova fra poco.' },
      ]);
    }
  };

  const stateClass = !hasOpened
    ? 'opacity-0 pointer-events-none translate-y-3'
    : isOpen
    ? 'vela-modal-open pointer-events-auto'
    : 'vela-modal-close pointer-events-none';

  return (
    <div
      className={`fixed bottom-24 right-6 z-40 w-[min(92vw,400px)] h-[min(78vh,620px)] ${stateClass}`}
      style={{ transformOrigin: 'bottom right' }}
      aria-hidden={!isOpen}
    >
      <div
        className="relative flex h-full w-full flex-col overflow-hidden rounded-[26px]
                      border border-white/[0.08]
                      bg-[linear-gradient(165deg,_rgba(22,22,30,0.92)_0%,_rgba(10,10,15,0.96)_100%)]
                      backdrop-blur-2xl
                      shadow-[0_40px_100px_-20px_rgba(0,0,0,0.75),_inset_0_1px_0_rgba(255,255,255,0.04)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b57e]/60 to-transparent" />
        <div className="pointer-events-none absolute -top-28 -right-28 h-60 w-60 rounded-full bg-[radial-gradient(circle,_rgba(232,181,126,0.20),_transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,_rgba(120,90,200,0.10),_transparent_70%)]" />

        <header className="relative flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
          <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-[#e8b57e] to-[#c98e54] flex items-center justify-center text-[#1a1108] shadow-[0_8px_24px_-8px_rgba(232,181,126,0.6)]">
            <span className="font-display text-xl italic leading-none">V</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0a0a0f]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display text-[18px] leading-tight text-white">Vela</div>
            <div className="text-[11px] tracking-wide text-white/45">online · risponde in pochi secondi</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi chat"
            className="h-8 w-8 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors duration-200 flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div ref={scrollRef} className="vela-scroll relative flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`vela-msg flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed break-words
                    ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-[#e8b57e] to-[#c98e54] text-[#1a1108] rounded-br-md shadow-[0_10px_30px_-12px_rgba(232,181,126,0.45)]'
                        : 'bg-white/[0.04] text-white/90 border border-white/[0.06] rounded-bl-md'
                    }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="relative px-4 pb-4 pt-2">
          <div
            className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03]
                          focus-within:border-[#e8b57e]/40 focus-within:bg-white/[0.05]
                          transition-colors duration-200 px-3 py-1.5"
          >
            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Scrivi qualcosa…"
              className="flex-1 min-w-0 bg-transparent text-[14px] text-white placeholder:text-white/30 outline-none py-2 px-1 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={sendMessage}
              aria-label="Invia messaggio"
              className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                         bg-gradient-to-br from-[#e8b57e] to-[#c98e54] text-[#1a1108]
                         transition-all duration-200
                         hover:scale-105 active:scale-95
                         disabled:opacity-30 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="mt-2 px-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
            Premi <span className="text-white/55">Invio</span> per inviare
          </p>
        </div>
      </div>
    </div>
  );
}
