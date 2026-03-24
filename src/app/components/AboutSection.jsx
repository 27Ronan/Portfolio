"use client";

export default function AboutSection() {
  const codeLines = [
    { key: "name", val: '"Ronan Renz Valencia"' },
    { key: "role", val: '"Frontend Developer"' },
    { key: "degree", val: '"BS Computer Science"' },
    { key: "status", val: '"Open to opportunities"' },
    { key: "focus", val: '["UI/UX", "React", "Next.js"]' },
  ];

  const facts = [
    "Currently learning: TypeScript & Framer Motion",
    "Available for: Full-time, Freelance, Internship",
    "Based in: Philippines",
  ];

  return (
    <section
      id="about"
      style={{
        padding: "8rem 10vw",
        display: "grid",
        /* Responsive: stacks on mobile, side by side on desktop */
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      {/* Terminal card */}
      <div
        style={{
          background: "#0f0a0a",
          border: "1px solid rgba(255,26,26,0.18)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(255,26,26,0.06)",
        }}
      >
        <div
          style={{
            background: "#1a0f0f",
            padding: "0.75rem 1rem",
            display: "flex",
            gap: "6px",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,26,26,0.1)",
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
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#ffffff33",
              marginLeft: "0.5rem",
            }}
          >
            about.js
          </span>
        </div>
        <div style={{ padding: "1.5rem" }}>
          {codeLines.map(({ key, val }) => (
            <div
              key={key}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                marginBottom: "0.65rem",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "#ff6b6b" }}>{key}</span>
              <span style={{ color: "#ffffff33" }}>: </span>
              <span style={{ color: "#ffaaaa" }}>{val}</span>
              <span style={{ color: "#ffffff33" }}>,</span>
            </div>
          ))}
        </div>
      </div>

      {/* Text */}
      <div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ff1a1a",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          01. ABOUT ME
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 1.5rem 0",
            lineHeight: 1.15,
          }}
        >
          I build interfaces,
          <br />
          <span style={{ color: "#ff1a1a" }}>not just websites.</span>
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
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
            fontFamily: "'DM Sans', sans-serif",
            color: "#8899aa",
            lineHeight: 1.8,
            fontSize: "0.98rem",
            marginBottom: "2rem",
          }}
        >
          From POS systems to AI-driven simulations, I&apos;ve contributed the
          frontend layer across diverse projects — always asking:{" "}
          <em style={{ color: "#ffcccc" }}>
            &quot;does this feel good to use?&quot;
          </em>
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
        >
          {facts.map((t) => (
            <div
              key={t}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ color: "#ff1a1a", fontSize: "0.8rem" }}>▹</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
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
