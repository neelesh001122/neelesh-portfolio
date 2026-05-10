import { useEffect, useRef, useState } from "react";

import OpenAI from "openai";

import {
  FaRobot,
  FaTimes,
} from "react-icons/fa";

/* OPENROUTER SETUP */
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",

  apiKey:
    import.meta.env.VITE_OPENROUTER_API_KEY,

  dangerouslyAllowBrowser: true,
});

/* AI CONTEXT */
const portfolioContext = `
You are Neelesh Verma's AI portfolio assistant.

About Neelesh:
- AI & Data Analytics enthusiast
- Skilled in Python, MySQL, Power BI, Excel, Machine Learning, Data Visualization
- Built projects like Fraud Detection System, Social Buzz Analytics, Laptop Price Predictor, and Road Accident Dashboard
- Passionate about futuristic UI/UX, automation, and AI-driven products

Rules:
- Answer professionally
- Keep responses concise
- Focus only on portfolio, projects, skills, experience, and career
`;

function AIChat() {

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hi 👋 I'm Neelesh's AI assistant. I can help you explore his projects, analytics skills, AI interests, and experience 🚀",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const messagesEndRef = useRef(null);

  /* SUGGESTIONS */
  const suggestions = [
    "Tell me about Neelesh",
    "What projects has he built?",
    "What are his skills?",
    "Does he have analytics experience?",
  ];

  /* AUTO FOCUS */
  useEffect(() => {

    if (open && inputRef.current) {

      inputRef.current.focus();

    }

  }, [open]);

  /* AUTO SCROLL */
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);

  /* SEND MESSAGE */
  const sendMessage = async () => {

    if (!input.trim() || loading) return;

    const currentInput = input;

    /* USER MESSAGE */
    const userMessage = {
      role: "user",
      text: currentInput,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setLoading(true);

    try {

      const completion =
        await openai.chat.completions.create({

          model: "openrouter/free",

          messages: [
            {
              role: "system",
              content: portfolioContext,
            },

            {
              role: "user",
              content: currentInput,
            },
          ],
        });

      const response =
        completion.choices[0].message.content;

      /* AI RESPONSE */
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response,
        },
      ]);

    } catch (error) {

      console.error(
        "OpenRouter Error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "AI temporarily unavailable ❌",
        },
      ]);

    }

    setLoading(false);

  };

  return (

    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-linear-to-r from-blue-500 to-fuchsia-500 p-4 text-2xl text-white shadow-[0_0_35px_rgba(168,85,247,0.6)] transition duration-300 hover:scale-110"
      >

        {open ? <FaTimes /> : <FaRobot />}

      </button>

      {/* CHAT WINDOW */}
      {open && (

        <div className="fixed bottom-24 right-6 z-50 flex h-125 w-87.5 flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-[0_0_60px_rgba(59,130,246,0.25)] backdrop-blur-xl">

          {/* HEADER */}
          <div className="bg-linear-to-r from-blue-500 to-fuchsia-500 p-4 text-lg font-bold text-white">

            AI Assistant 🤖

          </div>

          {/* MESSAGES */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-white/10 text-gray-200"
                }`}
              >

                {msg.text}

              </div>

            ))}

            {/* SUGGESTIONS */}
            {messages.length === 1 && (

              <div className="flex flex-wrap gap-2">

                {suggestions.map((question, index) => (

                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition hover:bg-white/10"
                  >

                    {question}

                  </button>

                ))}

              </div>

            )}

            {/* LOADING */}
            {loading && (

              <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-sm text-gray-300">

                <div className="flex gap-1 text-lg">
                  <span className="animate-bounce">•</span>
                  <span className="animate-bounce [animation-delay:0.2s]">•</span>
                  <span className="animate-bounce [animation-delay:0.4s]">•</span>
                </div>

              </div>

            )}

            <div ref={messagesEndRef} />

          </div>

          {/* INPUT AREA */}
          <div className="flex gap-2 border-t border-white/10 p-4">

            <input
              ref={inputRef}
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter" && !loading) {

                  sendMessage();

                }

              }}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className={`rounded-xl px-5 py-3 font-semibold text-white transition ${
                loading
                  ? "cursor-not-allowed bg-gray-600"
                  : "bg-linear-to-r from-blue-500 to-fuchsia-500 hover:opacity-90"
              }`}
            >

              {loading ? "..." : "Send"}

            </button>

          </div>

        </div>

      )}

    </>

  );
}

export default AIChat;