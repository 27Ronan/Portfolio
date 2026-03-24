"use client";

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", color: "#e34f26", icon: "🌐" },
    { name: "CSS3", color: "#1572b6", icon: "🎨" },
    { name: "JavaScript", color: "#f7df1e", icon: "⚡" },
    { name: "React", color: "#61dafb", icon: "⚛️" },
    { name: "Next.js", color: "#ff6b6b", icon: "▲" },
    { name: "Tailwind", color: "#06b6d4", icon: "💨" },
    { name: "Git", color: "#f05032", icon: "🔀" },
    { name: "Figma", color: "#a259ff", icon: "✏️" },
  ];

  return (
    <section id="skills" style={{ padding: "8rem 10vw", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#ff1a1a",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          marginBottom: "1rem",
        }}
      >
        02. SKILLS
      </p>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "3.5rem",
        }}
      >
        My Tech Stack
      </h2>

      {/* Responsive grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "1.2rem",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        {skills.map(({ name, color, icon }) => (
          <div
            key={name}
            style={{
              background: "#0f0a0a",
              border: `1px solid ${color}22`,
              borderRadius: "10px",
              padding: "1.5rem 1rem",
              cursor: "default",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color + "99";
              e.currentTarget.style.background = color + "12";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = `0 10px 30px ${color}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = color + "22";
              e.currentTarget.style.background = "#0f0a0a";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              {icon}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
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
