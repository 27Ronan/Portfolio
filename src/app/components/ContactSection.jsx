"use client";

export default function ContactSection() {
  const socials = [
    { label: "GitHub", href: "https://github.com/27Ronan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ronanrenzvalencia" },
    { label: "Email", href: "mailto:valenciaronan@gmail.com" },
  ];

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
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "250px",
          background:
            "radial-gradient(ellipse, rgba(255,26,26,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#ff1a1a",
            fontSize: "0.8rem",
            letterSpacing: "0.2em",
            marginBottom: "1rem",
          }}
        >
          04. CONTACT
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
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
            fontFamily: "'DM Sans', sans-serif",
            color: "#8899aa",
            fontSize: "1.05rem",
            maxWidth: "480px",
            margin: "0 auto 3rem auto",
            lineHeight: 1.75,
          }}
        >
          I&apos;m open to frontend roles, freelance projects, and internships.
          If you have something in mind, let&apos;s talk.
        </p>

        <a
          href="mailto:valenciaronan@gmail.com"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.9rem",
            background: "#ff1a1a",
            color: "#ffffff",
            padding: "1rem 2.5rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: 700,
            letterSpacing: "0.05em",
            display: "inline-block",
            marginBottom: "3rem",
            transition: "all 0.2s",
            boxShadow: "0 4px 20px rgba(255,26,26,0.25)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ff4444";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 30px rgba(255,26,26,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#ff1a1a";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 20px rgba(255,26,26,0.25)";
          }}
        >
          Say Hello ✉
        </a>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
                color: "#8899aa",
                textDecoration: "none",
                letterSpacing: "0.1em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff1a1a")}
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