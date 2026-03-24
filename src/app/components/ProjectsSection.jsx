"use client";
import { useState } from "react";

const projects = [
  {
    name: "MashMarket (M.A.S.H.)",
    shortDesc:
      "A specialized B2C marketplace for mushroom growers — built a full seller dashboard with real-time inventory, sales analytics, and order tracking to empower local farmers with direct-to-consumer tools.",
    tags: ["Next.js", "TypeScript", "Sanity", "Clerk", "Tailwind"],
    emoji: "🍄",
    featured: true,
    liveUrl: "https://mashmarket.app/",
    githubUrl: "https://github.com/MASH-Mushroom-Automation/MASH-Ecommerce-Web",
    problem:
      "Mushroom growers struggle with fragmented sales channels and lack the technical tools to manage inventory or see data-driven insights into their business.",
    solution:
      "Built a unified 'Mushroom Hub' combining a professional consumer storefront with a backend command center for sellers — making the complex process of running an online farm simple and intuitive.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Clerk",
      "Figma",
    ],
    myRole: "Lead Frontend Engineer & UI/UX Designer",
    impact:
      "Empowered local mushroom growers to sell directly to consumers, eliminating middlemen and maximizing profit margins through a clean, data-rich seller dashboard.",
    image: null,
  },
  {
    name: "Role-Specific POS System",
    shortDesc:
      "Point of Sale system built for a milk tea shop with role-based access and real-time order flow.",
    tags: ["Frontend", "UI/UX", "POS"],
    emoji: "🧋",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Jasupaa/ROLE-SPECIFIC-POS-SYSTEM",
    problem:
      "Manual order tracking was slow and error-prone during peak hours, causing delays and wrong orders.",
    solution:
      "Built a role-based dashboard where cashiers, kitchen staff, and managers each see only what they need — reducing clutter and speeding up workflow.",
    stack: ["React", "CSS Modules", "Firebase"],
    myRole: "Frontend Developer + UI/UX Designer",
    impact:
      "Streamlined order processing with a clean, role-specific interface that reduced training time for new staff.",
    image: null,
  },
  {
    name: "MyxCulture Website",
    shortDesc:
      "Official website for a clothing brand with product showcasing and brand storytelling.",
    tags: ["React", "CSS", "Brand"],
    emoji: "👕",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Arjayy007/MyxCulture-Website",
    problem:
      "The brand had no online presence and relied entirely on social media for product visibility.",
    solution:
      "Designed and built a clean brand website with product gallery, about section, and contact page that reflects the brand identity.",
    stack: ["React", "CSS", "Figma"],
    myRole: "Frontend Developer",
    impact: "Gave the brand a professional web presence beyond social media.",
    image: null,
  },
  {
    name: "Text Adventure — SAGE",
    shortDesc:
      "AI-powered Story Adaptive Game Engine that generates dynamic branching narratives.",
    tags: ["AI", "Frontend", "Game"],
    emoji: "📖",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Genrei123/Text-Adventure",
    problem:
      "Creating interactive stories required writing hundreds of branching paths manually — not scalable.",
    solution:
      "Built a game engine UI where users input a story premise and the AI generates adaptive, branching narrative paths in real time.",
    stack: ["React", "OpenAI API", "CSS"],
    myRole: "Frontend Developer",
    impact:
      "Turned a complex AI backend into a clean, playable story experience anyone can use.",
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

        {/* Image / placeholder */}
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
            overflow: "hidden",
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
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  border: "1px solid #ff1a1a22",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal action links */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                background: "#ff1a1a",
                color: "#ffffff",
                padding: "0.6rem 1.2rem",
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
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              color: "#ffffff",
              border: "1px solid #ffffff22",
              padding: "0.6rem 1.2rem",
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
          background: "#0d0808",
          border: featured
            ? "1px solid rgba(255,26,26,0.25)"
            : "1px solid rgba(255,255,255,0.07)",
          borderRadius: "14px",
          padding: featured ? "2rem" : "1.5rem",
          display: "grid",
          gridTemplateColumns: featured ? "auto 1fr" : "1fr",
          gap: "1.5rem",
          alignItems: "start",
          transition: "all 0.25s ease",
          cursor: "default",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = featured
            ? "rgba(255,26,26,0.5)"
            : "rgba(255,255,255,0.15)";
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
        {/* Image / placeholder */}
        <div
          style={{
            background: "linear-gradient(135deg, #1a0808, #200d0d)",
            borderRadius: "10px",
            width: featured ? "220px" : "100%",
            height: featured ? "160px" : "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: featured ? "4rem" : "2.5rem",
            border: "1px solid rgba(255,26,26,0.1)",
            flexShrink: 0,
            overflow: "hidden",
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

            {/* Live Demo — only for MASH */}
            {featured && project.liveUrl && (
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
                Live Demo ↗
              </a>
            )}

            {/* View Code — always shown */}
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
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff1a1a")}
              onMouseLeave={(e) => (e.target.style.color = "#8899aa")}
            >
              View Code ↗
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

      {/* Featured — MASH */}
      <div style={{ marginBottom: "1.5rem" }}>
        <ProjectCard project={projects[0]} featured={true} />
      </div>

      {/* Other projects — responsive grid */}
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
