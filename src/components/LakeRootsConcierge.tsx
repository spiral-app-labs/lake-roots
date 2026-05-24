"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/data";
import { CONCIERGE_SUGGESTIONS, getLakeRootsConciergeReply } from "@/lib/concierge";

type Message = {
  role: "guest" | "concierge";
  content: string;
};

async function fetchReply(prompt: string) {
  const response = await fetch("/api/concierge", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ message: prompt }),
  });

  if (!response.ok) {
    throw new Error("Concierge request failed");
  }

  const payload = (await response.json()) as { reply?: string };
  return payload.reply || getLakeRootsConciergeReply(prompt);
}

export default function LakeRootsConcierge() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "concierge",
      content:
        "Ask about menus, hours, directions, walk-ins, events, catering, market shelves, or gift cards.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.location.hash === "#concierge") {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(prompt: string) {
    const trimmed = prompt.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "guest", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await fetchReply(trimmed);
      setMessages([...nextMessages, { role: "concierge", content: reply }]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "concierge",
          content: getLakeRootsConciergeReply(trimmed),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open Lake Roots concierge"
        onClick={() => setOpen(true)}
        className={`fixed right-3 top-20 z-50 rounded-full border border-cream/30 bg-charcoal px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cream shadow-[0_16px_40px_rgba(44,44,44,0.22)] transition hover:bg-charcoal-light md:bottom-6 md:right-6 md:top-auto md:px-5 md:tracking-[0.18em] ${
          open ? "pointer-events-none translate-y-3 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span className="md:hidden">Ask</span>
        <span className="hidden md:inline">Ask Lake Roots</span>
      </button>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-charcoal/48 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <section
        role="dialog"
        aria-label="Lake Roots concierge"
        className={`fixed bottom-24 left-3 right-3 z-[70] flex max-h-[calc(100svh-8rem)] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-[1.25rem] border border-sage/20 bg-cream shadow-[0_24px_70px_rgba(44,44,44,0.28)] transition-transform duration-300 md:bottom-6 md:left-auto md:right-6 md:max-h-[680px] md:w-[430px] ${
          open ? "translate-y-0" : "pointer-events-none translate-y-[calc(100%+8rem)]"
        }`}
      >
        <div className="border-b border-sage/15 bg-charcoal px-5 py-4 text-cream">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.26em] text-sage-light">Lake Roots Concierge</p>
              <h2 className="mt-1 font-display text-xl sm:text-2xl">Plan the right visit.</h2>
            </div>
            <button
              type="button"
              aria-label="Close concierge"
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-full border border-cream/20 px-3 py-1 text-sm text-cream/80 transition hover:border-cream/45 hover:text-cream"
            >
              Close
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={message.role === "guest" ? "flex justify-end" : "flex justify-start"}>
              <div
                className={`max-w-[88%] rounded-[1rem] px-4 py-3 text-sm leading-relaxed ${
                  message.role === "guest"
                    ? "bg-sage text-white"
                    : "border border-sage/12 bg-white text-charcoal/78"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-[1rem] border border-sage/12 bg-white px-4 py-3 text-sm text-charcoal/60">
                Checking verified Lake Roots details...
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-sage/12 bg-cream-dark px-5 py-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {CONCIERGE_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => void sendMessage(suggestion)}
                className="rounded-full border border-sage/25 bg-white px-3 py-1.5 text-xs text-charcoal/72 transition hover:border-sage hover:text-charcoal"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a quick question"
              className="min-w-0 flex-1 rounded-full border border-sage/20 bg-white px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-sage"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal-light disabled:cursor-not-allowed disabled:bg-charcoal/45"
            >
              Send
            </button>
          </form>
          <p className="mt-3 text-xs leading-relaxed text-charcoal/58">
            Call {CONTACT.phoneDisplay} for allergies, live waits, holiday hours, or urgent details.
          </p>
        </div>
      </section>
    </>
  );
}
