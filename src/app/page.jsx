"use client";
import { useState, useEffect, useRef } from "react";

const TYPING_STRINGS = [
  "Frontend Developer.",
  "UI/UX Enthusiast.",
  "CS Graduate.",
  "Building things people enjoy.",
];

function useTypingEffect(strings) {
  const [display, setDisplay] = useState("");
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 70);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      // Avoid calling setState synchronously in effect
      setTimeout(() => {
        setDeleting(false);
        setStrIndex((s) => (s + 1) % strings.length);
      }, 0);
    }
    setDisplay(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex, strings]);

  return display;
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Skills", "Projects", "Contact"];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(6,6,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,220,255,0.08)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#00dcff",
          letterSpacing: "0.04em",
        }}
      >
        RRV<span style={{ color: "#ffffff44" }}>.dev</span>
      </span>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.8rem",
              color: "#8899aa",
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00dcff")}
            onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.75rem",
            color: "#00dcff",
            border: "1px solid #00dcff44",
            padding: "0.4rem 1rem",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.08em",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#00dcff18";
            e.target.style.borderColor = "#00dcff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.borderColor = "#00dcff44";
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,220,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,220,255,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(0,180,255,0.12) 0%,transparent 70%)",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            color: "#00dcff",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
            opacity: 0.8,
          }}
        >
          &gt; Hello, world. I&apos;m
        </p>
        <h1
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(3rem,7vw,6rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            margin: "0 0 0.5rem 0",
            letterSpacing: "-0.02em",
          }}
        >
          Ronan Renz
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
              color: "transparent",
            }}
          >
            Valencia
          </span>
        </h1>
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "clamp(1rem,2.5vw,1.4rem)",
            color: "#00dcff",
            minHeight: "2rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <span>{typed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "#00dcff",
              animation: "blink 1s step-end infinite",
              marginLeft: "2px",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            color: "#8899aa",
            fontSize: "1.05rem",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          CS graduate passionate about crafting clean, intuitive user
          interfaces. I turn ideas into experiences that people actually enjoy
          using.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.85rem",
              background: "#00dcff",
              color: "#06060e",
              padding: "0.75rem 1.8rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#33e8ff")}
            onMouseLeave={(e) => (e.target.style.background = "#00dcff")}
          >
            View Projects ▸
          </a>
          <a
            href="https://github.com/27Ronan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.85rem",
              color: "#ffffff",
              border: "1px solid #ffffff22",
              padding: "0.75rem 1.8rem",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#ffffff55";
              e.target.style.background = "#ffffff08";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#ffffff22";
              e.target.style.background = "transparent";
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 10vw",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#0d0d1a",
          border: "1px solid rgba(0,220,255,0.15)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(0,180,255,0.07)",
        }}
      >
        <div
          style={{
            background: "#161625",
            padding: "0.75rem 1rem",
            display: "flex",
            gap: "6px",
            alignItems: "center",
            borderBottom: "1px solid rgba(0,220,255,0.1)",
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: c,
              }}
            />
          ))}
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.7rem",
              color: "#ffffff33",
              marginLeft: "0.5rem",
            }}
          >
            about.js
          </span>
        </div>
        <div style={{ padding: "1.5rem" }}>
          {[
            { key: "name", val: '"Ronan Renz Valencia"' },
            { key: "role", val: '"Frontend Developer"' },
            { key: "degree", val: '"BS Computer Science"' },
            { key: "status", val: '"Open to opportunities"' },
            { key: "focus", val: '["UI/UX","React","Next.js"]' },
          ].map(({ key, val }) => (
            <div
              key={key}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.82rem",
                marginBottom: "0.6rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#7090ff" }}>{key}</span>
              <span style={{ color: "#ffffff44" }}>: </span>
              <span style={{ color: "#00dcff" }}>{val}</span>
              <span style={{ color: "#ffffff44" }}>,</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            color: "#00dcff",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          01. ABOUT ME
        </p>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1,
          }}
        >
          I build interfaces,
          <br />
          <span style={{ color: "#00dcff" }}>not just websites.</span>
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            color: "#8899aa",
            lineHeight: 1.8,
            marginBottom: "1rem",
            fontSize: "0.98rem",
          }}
        >
          I&apos;m a graduating Computer Science student with a deep focus on
          frontend development. I care about the details — animations, spacing,
          accessibility, and the feeling a user gets when everything just works.
        </p>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            color: "#8899aa",
            lineHeight: 1.8,
            fontSize: "0.98rem",
            marginBottom: "2rem",
          }}
        >
          From POS systems to AI-driven simulations, I&apos;ve contributed the
          frontend layer across diverse projects — always asking:{" "}
          <em style={{ color: "#ccd6f6" }}>
            &quot;does this feel good to use?&quot;
          </em>
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {[
            "Currently learning: TypeScript & Framer Motion",
            "Available for: Full-time, Freelance, Internship",
            "Based in: Philippines",
          ].map((t) => (
            <div
              key={t}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ color: "#00dcff", fontSize: "0.8rem" }}>▹</span>
              <span
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  color: "#8899aa",
                  fontSize: "0.9rem",
                }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    { name: "HTML5", color: "#e34f26", icon: "🌐" },
    { name: "CSS3", color: "#1572b6", icon: "🎨" },
    { name: "JavaScript", color: "#f7df1e", icon: "⚡" },
    { name: "React", color: "#61dafb", icon: "⚛️" },
    { name: "Next.js", color: "#ffffff", icon: "▲" },
    { name: "Tailwind", color: "#06b6d4", icon: "💨" },
    { name: "Git", color: "#f05032", icon: "🔀" },
    { name: "Figma", color: "#a259ff", icon: "✏️" },
  ];
  return (
    <section id="skills" style={{ padding: "8rem 10vw", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          color: "#00dcff",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          marginBottom: "1rem",
        }}
      >
        02. SKILLS
      </p>
      <h2
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "3.5rem",
        }}
      >
        My Tech Stack
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {skills.map(({ name, color, icon }) => (
          <div
            key={name}
            style={{
              background: "#0d0d1a",
              border: `1px solid ${color}22`,
              borderRadius: "10px",
              padding: "1.5rem 1rem",
              cursor: "default",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color + "88";
              e.currentTarget.style.background = color + "10";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 8px 30px ${color}22`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = color + "22";
              e.currentTarget.style.background = "#0d0d1a";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              {icon}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.78rem",
                color: "#ccd6f6",
                letterSpacing: "0.05em",
              }}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "ROLE-SPECIFIC POS SYSTEM",
      desc: "A full-featured Point of Sale system built for a milk tea shop. Handles orders, inventory roles, and real-time transaction flow with a clean, intuitive interface.",
      tags: ["Frontend", "UI/UX", "POS"],
      featured: true,
      emoji: "🧋",
    },
    {
      name: "MyxCulture Website",
      desc: "Official website for a clothing brand — clean layout, product showcasing, and brand storytelling through thoughtful frontend design.",
      tags: ["React", "CSS", "Brand"],
      emoji: "👕",
    },
    {
      name: "Text Adventure — SAGE",
      desc: "Story Adaptive Game Engine using AI to generate dynamic narratives. Users prompt a story idea and SAGE brings it to life with branching outcomes.",
      tags: ["AI", "Frontend", "Game"],
      emoji: "📖",
    },
  ];
  return (
    <section id="projects" style={{ padding: "8rem 10vw" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          color: "#00dcff",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          marginBottom: "1rem",
        }}
      >
        03. PROJECTS
      </p>
      <h2
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "3rem",
        }}
      >
        Things I&apos;ve Built
      </h2>
      <div
        style={{
          background: "#0d0d1a",
          border: "1px solid rgba(0,220,255,0.2)",
          borderRadius: "14px",
          padding: "2.5rem",
          marginBottom: "1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "2.5rem",
          alignItems: "center",
          boxShadow: "0 0 60px rgba(0,180,255,0.06)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,220,255,0.45)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,220,255,0.2)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#0a1628,#0d2040)",
            borderRadius: "10px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4rem",
            border: "1px solid rgba(0,220,255,0.1)",
          }}
        >
          🧋
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.65rem",
                color: "#00dcff",
                border: "1px solid #00dcff44",
                padding: "0.2rem 0.6rem",
                borderRadius: "3px",
                letterSpacing: "0.1em",
              }}
            >
              FEATURED
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.75rem 0",
            }}
          >
            {projects[0].name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              color: "#8899aa",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
              fontSize: "0.95rem",
            }}
          >
            {projects[0].desc}
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {projects[0].tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.72rem",
                  color: "#00dcff",
                  background: "#00dcff10",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1.2rem",
        }}
      >
        {projects.slice(1).map((p) => (
          <div
            key={p.name}
            style={{
              background: "#0d0d1a",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "1.8rem",
              transition: "all 0.25s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,220,255,0.3)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(0,180,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              {p.emoji}
            </div>
            <h3
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 0.75rem 0",
                lineHeight: 1.3,
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                color: "#8899aa",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}
            >
              {p.desc}
            </p>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.68rem",
                    color: "#7090ff",
                    background: "#7090ff10",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "20px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href="https://github.com/27Ronan"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.82rem",
            color: "#00dcff",
            textDecoration: "none",
            letterSpacing: "0.08em",
            borderBottom: "1px solid #00dcff44",
            paddingBottom: "2px",
          }}
        >
          View all projects on GitHub ↗
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "8rem 10vw",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "200px",
          background:
            "radial-gradient(ellipse,rgba(0,180,255,0.1) 0%,transparent 70%)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            color: "#00dcff",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          04. CONTACT
        </p>
        <h2
          style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(2rem,5vw,3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans',sans-serif",
            color: "#8899aa",
            fontSize: "1.05rem",
            maxWidth: "480px",
            margin: "0 auto 3rem auto",
            lineHeight: 1.7,
          }}
        >
          I&apos;m open to frontend roles, freelance projects, and internships.
          If you have something in mind, let&apos;s talk.
        </p>
        <a
          href="mailto:ronanrenz@email.com"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.9rem",
            background: "#00dcff",
            color: "#06060e",
            padding: "1rem 2.5rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "0.05em",
            display: "inline-block",
            marginBottom: "3rem",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#33e8ff";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#00dcff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Say Hello ✉
        </a>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          {[
            { label: "GitHub", href: "https://github.com/27Ronan" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ronanrenzvalencia/",
            },
            { label: "Email", href: "mailto:valenciaronan@email.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.8rem",
                color: "#8899aa",
                textDecoration: "none",
                letterSpacing: "0.1em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00dcff")}
              onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "1.5rem 10vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.72rem",
          color: "#ffffff22",
          letterSpacing: "0.05em",
        }}
      >
        © 2025 Ronan Renz Valencia
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.72rem",
          color: "#ffffff22",
        }}
      >
        Built with Next.js &amp; ☕
      </span>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main
      style={{ background: "#06060e", minHeight: "100vh", color: "#ffffff" }}
    >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
