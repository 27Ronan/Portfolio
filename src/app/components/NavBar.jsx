"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-link {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #8899aa;
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #ff1a1a; }
        .hire-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #ff1a1a;
          border: 1px solid #ff1a1a44;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: all 0.2s;
        }
        .hire-btn:hover { background: #ff1a1a18; border-color: #ff1a1a; }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

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
          background: scrolled || menuOpen ? "rgba(8,6,8,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,26,26,0.12)" : "none",
          transition: "all 0.4s ease",
          flexWrap: "wrap",
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

        {/* Desktop links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
          <a href="#contact" className="hire-btn">
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              padding: "1.25rem 0 1rem 0",
              animation: "slideDown 0.25s ease",
              borderTop: "1px solid rgba(255,26,26,0.1)",
              marginTop: "0.75rem",
            }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="nav-link"
                style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="hire-btn"
              style={{
                alignSelf: "flex-start",
                fontSize: "0.85rem",
                padding: "0.6rem 1.4rem",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
