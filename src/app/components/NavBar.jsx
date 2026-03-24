"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 200,
          height: "2px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #ff1a1a, #ff6b6b)",
          transition: "width 0.1s linear",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(8,6,8,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,26,26,0.12)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#ff1a1a",
            letterSpacing: "0.04em",
          }}
        >
          RRV<span style={{ color: "#ffffff33" }}>.dev</span>
        </span>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "#8899aa",
                textDecoration: "none",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff1a1a")}
              onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#ff1a1a",
              border: "1px solid #ff1a1a44",
              padding: "0.4rem 1rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ff1a1a18";
              e.target.style.borderColor = "#ff1a1a";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "#ff1a1a44";
            }}
          >
            Hire Me
          </a>
        </div>
      </nav>
    </>
  );
}
