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
        padding: "0 10vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,26,26,0.1) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(60px)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ff1a1a",
            fontSize: "0.85rem",
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
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
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
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
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
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#8899aa",
            fontSize: "1.1rem",
            maxWidth: "540px",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          I turn complex systems into simple, usable interfaces. CS graduate who
          cares about every pixel, interaction, and the feeling when it all just
          works.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              background: "#ff1a1a",
              color: "#ffffff",
              padding: "0.8rem 1.8rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ff4444";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 25px rgba(255,26,26,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#ff1a1a";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View Projects ▸
          </a>

          {/* TODO: Replace href with your actual resume PDF path e.g. "/resume.pdf" once you add it to the public/ folder */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              color: "#ffffff",
              border: "1px solid #ffffff33",
              padding: "0.8rem 1.8rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#ff1a1a";
              e.target.style.color = "#ff1a1a";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#ffffff33";
              e.target.style.color = "#ffffff";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Download CV ↓
          </a>

          <a
            href="https://github.com/27Ronan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              color: "#8899aa",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff1a1a")}
            onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <style>{`@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
    </section>
  );
}
