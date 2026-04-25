import React, { useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'siet-chatbot-history';

const suggestedQuestions = [
  'How can I apply for admission?',
  'What courses are offered at SIET?',
  'What is the fee structure?',
  'How are placements at SIET?',
  'Where can I see latest notices?'
];

const botReplies = {
  admission: 'Admissions are open for the 2026-27 session. You can check the notices and prospectus links in Academics.',
  departments: 'SIET offers six B.Tech programs with modern labs and project-based learning.',
  placements: 'The placement cell provides aptitude, technical, and interview preparation with recruiter engagement year-round.',
  fees: 'You can find fee and admission-related PDFs in the academics document section.',
  default: 'Thanks for your message. I can help with admissions, departments, placements, and campus facilities.'
};

const getReply = (message) => {
  const value = message.toLowerCase();
  if (value.includes('admission') || value.includes('apply') || value.includes('form')) {
    return `${botReplies.admission} You can open the Admission Form page from the Academics menu.`;
  }
  if (value.includes('department') || value.includes('course') || value.includes('branch')) {
    return `${botReplies.departments} Current B.Tech options include Computer Science & Engineering, CSE (AI & ML), CSE (Cyber Security), Robotics & Automation, Electrical Engineering, and Electronics Engineering (VLSI Design).`;
  }
  if (value.includes('placement') || value.includes('job') || value.includes('recruiter')) {
    return `${botReplies.placements} For T&P specific updates, use the Training & Placements link in navbar.`;
  }
  if (value.includes('fee') || value.includes('scholarship') || value.includes('prospectus')) {
    return `${botReplies.fees} Check the All Notices page for latest downloadable PDFs.`;
  }
  if (value.includes('notice') || value.includes('update') || value.includes('announcement')) {
    return 'Latest notices are available on the home notices strip and the "All Notices" page.';
  }
  if (value.includes('hostel') || value.includes('library') || value.includes('sports') || value.includes('facility')) {
    return 'Campus facilities information is available in the Facilities submenu (Hostels, Library, Sports, Smart Classrooms, Labs, Cafeteria, Healthcare, Security).';
  }
  if (value.includes('contact') || value.includes('phone') || value.includes('email')) {
    return 'Use the Contact button in navbar/footer details to reach institute support.';
  }
  return botReplies.default;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompactMobile, setIsCompactMobile] = useState(false);
  const [input, setInput] = useState('');
  const messagesRef = useRef(null);
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
  const messageIdRef = useRef(messages.length + 1);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 560px)');
    const apply = () => setIsCompactMobile(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const nextId = () => {
    const id = messageIdRef.current;
    messageIdRef.current += 1;
    return id;
  };

  const handleSend = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    const userMsg = { id: nextId(), role: 'user', text };
    const botMsg = { id: nextId(), role: 'bot', text: getReply(text) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const sendSuggestedQuestion = (question) => {
    const userMsg = { id: nextId(), role: 'user', text: question };
    const botMsg = { id: nextId(), role: 'bot', text: getReply(question) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
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

          <div className="chatbot-messages" ref={messagesRef}>
            {messages.map((message) => (
              <p key={message.id} className={`chat-message ${message.role}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chatbot-suggestions" aria-label="Suggested questions">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                className="suggestion-chip"
                onClick={() => sendSuggestedQuestion(question)}
              >
                {question}
              </button>
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
        {isOpen ? (isCompactMobile ? 'Close' : 'Close Chat') : (isCompactMobile ? 'Chat' : 'Chat with SIET')}
      </button>
    </div>
  );
};

export default ChatbotWidget;
