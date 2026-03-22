import React, { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'siet-chatbot-history';

const botReplies = {
  admission: 'Admissions are open for the 2026-27 session. You can check the notices and prospectus links in Academics.',
  departments: 'SIET offers AIML, Computer Science, and Robotics departments with modern labs and project-based learning.',
  placements: 'The placement cell provides aptitude, technical, and interview preparation with recruiter engagement year-round.',
  fees: 'You can find fee and admission-related PDFs in the academics document section.',
  default: 'Thanks for your message. I can help with admissions, departments, placements, and campus facilities.'
};

const getReply = (message) => {
  const value = message.toLowerCase();
  if (value.includes('admission') || value.includes('apply')) return botReplies.admission;
  if (value.includes('department') || value.includes('course')) return botReplies.departments;
  if (value.includes('placement') || value.includes('job')) return botReplies.placements;
  if (value.includes('fee') || value.includes('scholarship')) return botReplies.fees;
  return botReplies.default;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [
      { id: 1, role: 'bot', text: 'Hello! I am SIET assistant. Ask me about admissions, academics, and placements.' }
    ];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const handleSend = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: Date.now(), role: 'user', text };
    const botMsg = { id: Date.now() + 1, role: 'bot', text: getReply(text) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const clearChat = () => {
    const reset = [{ id: 1, role: 'bot', text: 'Chat reset. Ask anything about SIET.' }];
    setMessages(reset);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
  };

  return (
    <div className="chatbot-widget" aria-live="polite">
      {isOpen && (
        <section className="chatbot-panel">
          <header className="chatbot-header">
            <h3>SIET Assistant</h3>
            <button type="button" onClick={clearChat} className="chatbot-clear-btn">Clear</button>
          </header>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <p key={message.id} className={`chat-message ${message.role}`}>
                {message.text}
              </p>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" disabled={!canSend}>Send</button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle chatbot"
      >
        {isOpen ? 'Close Chat' : 'Chat with SIET'}
      </button>
    </div>
  );
};

export default ChatbotWidget;
