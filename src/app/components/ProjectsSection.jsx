"use client";
import { useState } from "react";

const projects = [
  {
    name: "ROLE-SPECIFIC POS SYSTEM",
    shortDesc:
      "Point of Sale system built for a milk tea shop with role-based access and real-time order flow.",
    tags: ["Frontend", "UI/UX", "POS"],
    emoji: "🧋",
    featured: true,
    // TODO: Replace with actual live demo URL when deployed
    liveUrl: "#",
    // TODO: Replace with actual GitHub repo URL
    githubUrl: "https://github.com/27Ronan",
    // Deep dive case study
    problem:
      "Manual order tracking was slow and error-prone during peak hours, causing delays and wrong orders.",
    solution:
      "Built a role-based dashboard where cashiers, kitchen staff, and managers each see only what they need — reducing clutter and speeding up workflow.",
    // TODO: Add your actual tech stack used for this project
    stack: ["React", "CSS Modules", "Firebase"],
    myRole: "Frontend Developer + UI/UX Designer",
    // TODO: Add a real measurable impact if you have one, e.g. "Reduced order errors by 40%"
    impact:
      "Streamlined order processing with a clean, role-specific interface that reduced training time for new staff.",
    // TODO: Replace with actual project screenshot path e.g. "/images/pos-screenshot.png"
    image: null,
  },
  {
    name: "MyxCulture Website",
    shortDesc:
      "Official website for a clothing brand with product showcasing and brand storytelling.",
    tags: ["React", "CSS", "Brand"],
    emoji: "👕",
    liveUrl: "#",
    githubUrl: "https://github.com/27Ronan",
    problem:
      "The brand had no online presence and relied entirely on social media for product visibility.",
    solution:
      "Designed and built a clean brand website with product gallery, about section, and contact page that reflects the brand identity.",
    // TODO: Add actual stack used
    stack: ["React", "CSS", "Figma"],
    myRole: "Frontend Developer",
    // TODO: Add real impact if available
    impact: "Gave the brand a professional web presence beyond social media.",
    // TODO: Replace with actual screenshot path
    image: null,
  },
  {
    name: "Text Adventure — SAGE",
    shortDesc:
      "AI-powered Story Adaptive Game Engine that generates dynamic branching narratives.",
    tags: ["AI", "Frontend", "Game"],
    emoji: "📖",
    liveUrl: "#",
    githubUrl: "https://github.com/27Ronan",
    problem:
      "Creating interactive stories required writing hundreds of branching paths manually — not scalable.",
    solution:
      "Built a game engine UI where users input a story premise and the AI generates adaptive, branching narrative paths in real time.",
    // TODO: Add actual stack used
    stack: ["React", "OpenAI API", "CSS"],
    myRole: "Frontend Developer",
    // TODO: Add real impact
    impact:
      "Turned a complex AI backend into a clean, playable story experience anyone can use.",
    // TODO: Replace with actual screenshot path
    image: null,
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#100a0a",
          border: "1px solid rgba(255,26,26,0.25)",
          borderRadius: "16px",
          padding: "2.5rem",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 0 80px rgba(255,26,26,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#ff1a1a",
                border: "1px solid #ff1a1a44",
                padding: "0.2rem 0.6rem",
                borderRadius: "3px",
                letterSpacing: "0.1em",
              }}
            >
              CASE STUDY
            </span>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0.75rem 0 0 0",
              }}
            >
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid #ffffff22",
              color: "#8899aa",
              borderRadius: "6px",
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#ff1a1a";
              e.target.style.color = "#ff1a1a";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#ffffff22";
              e.target.style.color = "#8899aa";
            }}
          >
            ✕ Close
          </button>
        </div>

        {/* TODO: Replace emoji placeholder with actual <img> tag once you have a screenshot */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0808, #200d0d)",
            borderRadius: "10px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "5rem",
            marginBottom: "2rem",
            border: "1px solid rgba(255,26,26,0.1)",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ) : (
            project.emoji
          )}
        </div>

        {/* Case study sections */}
        {[
          { label: "🔴 The Problem", content: project.problem },
          { label: "✅ The Solution", content: project.solution },
          { label: "🎯 My Role", content: project.myRole },
          { label: "📈 Impact", content: project.impact },
        ].map(({ label, content }) => (
          <div key={label} style={{ marginBottom: "1.5rem" }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                color: "#ff6b6b",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#aabbcc",
                lineHeight: 1.75,
                fontSize: "0.95rem",
              }}
            >
              {content}
            </p>
          </div>
        ))}

        {/* Stack */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              color: "#ff6b6b",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            🛠 STACK
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {project.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#ff1a1a",
                  background: "#ff1a1a12",
                  padding: "0.3rem 0.8rem",
                  borderRadius: "20px",
                  border: "1px solid #ff1a1a33",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              background: "#ff1a1a",
              color: "#ffffff",
              padding: "0.7rem 1.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#ff4444";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#ff1a1a";
            }}
          >
            Live Demo ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              color: "#ffffff",
              border: "1px solid #ffffff22",
              padding: "0.7rem 1.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#ff1a1a";
              e.target.style.color = "#ff1a1a";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#ffffff22";
              e.target.style.color = "#ffffff";
            }}
          >
            View Code ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}

      <div
        style={{
          background: "#0f0a0a",
          border: featured
            ? "1px solid rgba(255,26,26,0.25)"
            : "1px solid rgba(255,255,255,0.07)",
          borderRadius: "14px",
          padding: "2rem",
          transition: "all 0.3s ease",
          cursor: "pointer",
          display: featured ? "grid" : "flex",
          gridTemplateColumns: featured ? "1fr 2fr" : undefined,
          flexDirection: featured ? undefined : "column",
          gap: "2rem",
          alignItems: featured ? "center" : undefined,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,26,26,0.4)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 16px 50px rgba(255,26,26,0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = featured
            ? "rgba(255,26,26,0.25)"
            : "rgba(255,255,255,0.07)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* TODO: Replace emoji with <img> tag when you have screenshots */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0808, #200d0d)",
            borderRadius: "10px",
            height: featured ? "180px" : "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: featured ? "4rem" : "2.5rem",
            border: "1px solid rgba(255,26,26,0.1)",
            flexShrink: 0,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          ) : (
            project.emoji
          )}
        </div>

        <div>
          {featured && (
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#ff1a1a",
                border: "1px solid #ff1a1a44",
                padding: "0.2rem 0.6rem",
                borderRadius: "3px",
                letterSpacing: "0.1em",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              FEATURED
            </span>
          )}
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: featured ? "1.4rem" : "1rem",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 0.6rem 0",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#8899aa",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
              fontSize: "0.9rem",
            }}
          >
            {project.shortDesc}
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "1.25rem",
            }}
          >
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#ff1a1a",
                  background: "#ff1a1a12",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "20px",
                  border: "1px solid #ff1a1a22",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => setOpen(true)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                background: "#ff1a1a",
                color: "#ffffff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: 700,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#ff4444";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#ff1a1a";
              }}
            >
              Case Study ▸
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#ffffff",
                border: "1px solid #ffffff22",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#ff1a1a";
                e.target.style.color = "#ff1a1a";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#ffffff22";
                e.target.style.color = "#ffffff";
              }}
            >
              Live ↗
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#8899aa",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff1a1a")}
              onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "8rem 10vw" }}>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#ff1a1a",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          marginBottom: "1rem",
        }}
      >
        03. PROJECTS
      </p>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "3rem",
        }}
      >
        Things I&apos;ve Built
      </h2>

      {/* Featured */}
      <div style={{ marginBottom: "1.5rem" }}>
        <ProjectCard project={projects[0]} featured={true} />
      </div>

      {/* Other projects — responsive 2 col */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {projects.slice(1).map((p) => (
          <ProjectCard key={p.name} project={p} featured={false} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href="https://github.com/27Ronan"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.82rem",
            color: "#ff1a1a",
            textDecoration: "none",
            letterSpacing: "0.08em",
            borderBottom: "1px solid #ff1a1a44",
            paddingBottom: "2px",
          }}
        >
          View all projects on GitHub ↗
        </a>
      </div>
    </section>
  );
}
