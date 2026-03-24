"use client";
import { useState, useEffect } from "react";

const TYPING_STRINGS = [
  "Frontend Developer.",
  "UI/UX Enthusiast.",
  "CS Graduate.",
  "Building things people enjoy.",
];

function useTypingEffect(strings) {
  const [state, setState] = useState({
    display: "",
    strIndex: 0,
    charIndex: 0,
    deleting: false,
  });

  useEffect(() => {
    const { strIndex, charIndex, deleting } = state;
    const current = strings[strIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(
        () =>
          setState((s) => ({
            ...s,
            charIndex: s.charIndex + 1,
            display: current.slice(0, s.charIndex + 1),
          })),
        70,
      );
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(
        () => setState((s) => ({ ...s, deleting: true })),
        1800,
      );
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(
        () =>
          setState((s) => ({
            ...s,
            charIndex: s.charIndex - 1,
            display: current.slice(0, s.charIndex - 1),
          })),
        40,
      );
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(
        () =>
          setState((s) => ({
            ...s,
            deleting: false,
            strIndex: (s.strIndex + 1) % strings.length,
          })),
        300,
      );
    }
    return () => clearTimeout(timeout);
  }, [state, strings]);

  return state.display;
}

export default function HeroSection() {
  const typed = useTypingEffect(TYPING_STRINGS);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0 6vw",
        paddingTop: "80px", // account for fixed navbar
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        .hero-cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .hero-btn-primary {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          background: #ff1a1a;
          color: #ffffff;
          padding: 0.8rem 1.8rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          display: inline-block;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          background: #ff4444;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,26,26,0.35);
        }
        .hero-btn-outline {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: #ffffff;
          border: 1px solid #ffffff33;
          padding: 0.8rem 1.8rem;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          display: inline-block;
          white-space: nowrap;
        }
        .hero-btn-outline:hover {
          border-color: #ff1a1a;
          color: #ff1a1a;
          transform: translateY(-2px);
        }
        .hero-btn-ghost {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: #8899aa;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .hero-btn-ghost:hover { color: #ff1a1a; }
        @media (max-width: 480px) {
          .hero-cta-row { gap: 0.75rem; }
          .hero-btn-primary, .hero-btn-outline { padding: 0.7rem 1.3rem; font-size: 0.78rem; }
          .hero-btn-ghost { font-size: 0.78rem; }
        }
      `}</style>

      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "8%",
          width: "min(500px, 80vw)",
          height: "min(500px, 80vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,26,26,0.1) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "760px",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ff1a1a",
            fontSize: "clamp(0.72rem, 2vw, 0.85rem)",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
            opacity: 0.9,
          }}
        >
          &gt; Hello, world. I&apos;m
        </p>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.6rem, 10vw, 6.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            margin: "0 0 0.5rem 0",
            letterSpacing: "0.02em",
          }}
        >
          Ronan Renz
          <br />
          <span
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.25)",
              color: "transparent",
            }}
          >
            Valencia
          </span>
        </h1>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.9rem, 3vw, 1.4rem)",
            color: "#ff1a1a",
            minHeight: "2rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>{typed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "#ff1a1a",
              animation: "blink 1s step-end infinite",
              marginLeft: "2px",
              flexShrink: 0,
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#8899aa",
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            maxWidth: "540px",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          I turn complex systems into simple, usable interfaces. CS graduate who
          cares about every pixel, interaction, and the feeling when it all just
          works.
        </p>

        <div className="hero-cta-row">
          <a href="#projects" className="hero-btn-primary">
            View Projects ▸
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-outline"
          >
            Download CV ↓
          </a>
          <a
            href="https://github.com/27Ronan"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
