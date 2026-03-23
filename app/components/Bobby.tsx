"use client";

import { useState } from "react";

export default function Bobby() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="community"
      className="py-24 px-6"
      style={{ backgroundColor: "#faf6f0" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="font-sans text-xs tracking-widest uppercase mb-4"
          style={{ color: "#e8821a", letterSpacing: "0.2em" }}
        >
          Coming Soon
        </p>
        <h2
          className="font-serif font-light mb-6"
          style={{
            color: "#1a1008",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            lineHeight: "1.15",
          }}
        >
          Meet Bobby
        </h2>
        <p
          className="font-sans text-base mb-4"
          style={{ color: "#7a6a5a", lineHeight: "1.75" }}
        >
          The Solar Prophet. The hilarious, uncompromising voice of the
          philosophy.
        </p>
        <p
          className="font-serif italic text-lg mb-12"
          style={{ color: "#c9681a" }}
        >
          Bobby is coming.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 font-sans text-sm outline-none"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e8d5b8",
                color: "#1a1008",
                borderRadius: "2px",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 font-sans text-sm font-medium tracking-wide transition-all duration-150 whitespace-nowrap"
              style={{
                backgroundColor: "#e8821a",
                color: "#fff8f0",
                border: "none",
                borderRadius: "2px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#c9681a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#e8821a")
              }
            >
              Notify me
            </button>
          </form>
        ) : (
          <p
            className="font-sans text-sm"
            style={{ color: "#7a6a5a" }}
          >
            You are on the list. Bobby will find you.
          </p>
        )}
      </div>
    </section>
  );
}
