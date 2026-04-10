"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_USER_MESSAGES = 5;

const starterMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hello — I’m the CareBridge Health assistant. I can help with treatment fit, process, destinations, and the best next step before you submit a private consultation request.",
  },
];

const quickQuestions = [
  {
    label: "How it works",
    value: "What happens after I submit an enquiry?",
  },
  {
    label: "Women’s health",
    value: "Can you help with women’s health treatment enquiries?",
  },
  {
    label: "Hair transplant",
    value: "Would Istanbul or Antalya be better for hair transplant?",
  },
  {
    label: "Dental treatments",
    value: "Can you help me understand dental treatment options?",
  },
  {
    label: "Eye treatments",
    value: "How should I think about eye treatment options in Turkey?",
  },
];

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const userMessageCount = useMemo(
    () => messages.filter((m) => m.role === "user").length,
    [messages]
  );

  const limitReached = userMessageCount >= MAX_USER_MESSAGES;

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-carebridge-chat", handler);
    return () => window.removeEventListener("open-carebridge-chat", handler);
  }, []);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 80);

    return () => clearTimeout(timer);
  }, [messages, loading, open]);

  async function sendMessage(rawValue?: string) {
    const value = (rawValue ?? input).trim();
    if (!value || loading || limitReached) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: value },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as {
        reply?: string;
        limitReached?: boolean;
      };

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "You can submit a private consultation request below and we’ll review it more carefully by email.",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The assistant is temporarily unavailable. You can still request a private consultation using the form on the page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-50 overflow-hidden rounded-full border border-white/10 bg-[rgba(15,23,42,0.92)] px-5 py-4 text-sm font-medium text-white shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl transition"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_42%)]" />
        <span className="relative flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
          {open ? "Close assistant" : "Ask the assistant"}
        </span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.985 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[430px] overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(252,250,247,0.98)_100%)] shadow-[0_30px_90px_rgba(15,23,42,0.22)]"
          >
            <div className="relative border-b border-slate-200/80 px-5 py-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.05),transparent_38%)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
                      CareBridge Health
                    </div>
                    <div className="mt-1 text-lg font-semibold tracking-[-0.02em] text-slate-900">
                      Private guidance before you enquire
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:text-slate-900"
                    aria-label="Close assistant"
                  >
                    ✕
                  </button>
                </div>

                <p className="mt-3 max-w-[320px] text-sm leading-6 text-slate-600">
                  Ask about destination fit, treatment routes, timing, or the
                  best next step before submitting your private consultation
                  request.
                </p>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="max-h-[430px] space-y-4 overflow-y-auto bg-[#fcfaf7] px-4 py-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-[22px] px-4 py-3 text-sm leading-6 shadow-sm ${
                      message.role === "assistant"
                        ? "border border-slate-200 bg-white text-slate-800"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {loading ? (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                    Thinking...
                  </div>
                </div>
              ) : null}

              <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8f6f2_100%)] p-4 shadow-sm">
                <p className="text-sm leading-6 text-slate-600">
                  When you feel ready, the best next step is to submit a private
                  consultation request so your situation can be reviewed more
                  carefully by email.
                </p>

                <div className="mt-4">
                  <a
                    href="/#form"
                    className="inline-flex rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    Go to consultation form
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200/80 bg-white p-4">
              {!limitReached ? (
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickQuestions.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => sendMessage(item.value)}
                      disabled={loading}
                      className="rounded-full border border-slate-200 bg-[#fcfaf7] px-3 py-2 text-xs font-medium text-slate-600 transition hover:-translate-y-0.5 hover:bg-white disabled:opacity-50"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {limitReached ? (
                <div className="rounded-[22px] border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
                  I’ve shared the key guidance I can here. The best next step
                  now is to submit the consultation form so your request can be
                  reviewed properly by email.
                </div>
              ) : (
                <div className="flex gap-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage();
                    }}
                    placeholder="Ask about process, destinations, timing..."
                    className="w-full rounded-[20px] border border-slate-300 bg-[#fcfaf7] px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={loading}
                    className="rounded-[20px] bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}