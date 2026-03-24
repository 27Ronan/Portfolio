# Portfolio Project Summary

## Project Overview

This is a personal portfolio web application built with Next.js, React, and Tailwind CSS. It showcases the developer's skills, projects, and contact information in a modern, single-page layout. The project uses custom fonts, global CSS resets, and is structured for easy navigation and maintainability.

**Key Features:**

- Typing animation for developer roles in the hero section
- Responsive navigation bar with scroll effect
- About, Skills, Projects, and Contact sections, each with custom styling
- Project cards and featured project highlights
- Contact links and email integration
- Modular React components for each section

---

---

## File: README.md

**Summary:**

- Next.js project bootstrapped with create-next-app.
- Setup instructions for development server.
- Mentions use of next/font for font optimization.
- Links to Next.js documentation and deployment guides.

---

## File: package.json

**Summary:**

- Project manifest for npm.
- Scripts: dev, build, start, lint.
- Dependencies: next, react, react-dom.
- DevDependencies: @tailwindcss/postcss, eslint, eslint-config-next, tailwindcss.

---

## File: package-lock.json

**Summary:**

- Auto-generated lockfile for npm.
- Lists exact versions of all installed dependencies and devDependencies.

---

## File: jsconfig.json

**Summary:**

- JS config for path aliases.
- Maps @/_ to ./src/_ for easier imports.

---

## File: next.config.mjs

**Summary:**

- Next.js configuration file.
- Exports a nextConfig object (currently with placeholder for config options).

---

## File: eslint.config.mjs

**Summary:**

- ESLint configuration using eslint-config-next and custom global ignores for build/output folders.

---

## File: postcss.config.mjs

**Summary:**

- PostCSS configuration file.
- Sets up @tailwindcss/postcss as a plugin.

---

## File: src/app/globals.css

**Summary:**

- Global CSS reset: removes default margin/padding, sets box-sizing: border-box, and enables smooth scrolling.

---

## File: src/app/layout.jsx

**Summary:**

- Imports Google fonts and global CSS.
- Sets up font variables and exports metadata for the site (title, etc.).
- Defines the main layout for the Next.js app.

---

## File: src/app/page.jsx

**Summary:**

- Main page component for the portfolio, composed of several modular sections:
  - **NavBar:** Fixed navigation bar with smooth scroll and highlight on scroll.
  - **HeroSection:** Animated typing effect for developer roles, introduction, and call-to-action buttons.
  - **AboutSection:** Developer bio, background, and current focus/learning.
  - **SkillsSection:** Grid of technology icons and names representing the tech stack.
  - **ProjectsSection:** Featured and additional projects with descriptions, tags, and links.
  - **ContactSection:** Contact form, social links, and email integration.
  - **Footer:** Copyright and tech credit.
- Each section uses inline styles and custom fonts for a unique visual identity.

---

## File: src/app/components/NavBar.jsx

**Summary:**

- Navigation bar component with scroll progress indicator and smooth scroll/highlight on scroll. Responsive and fixed at the top. Uses React hooks for scroll state and progress.

---

## File: src/app/components/HeroSection.jsx

**Summary:**

- Hero section with animated typing effect for developer roles. Uses a custom hook for typing animation. Contains introduction and call-to-action buttons.

---

## File: src/app/components/AboutSection.jsx

**Summary:**

- About section with developer bio, education, status, and focus. Includes a terminal-style card and a list of personal/professional facts. Responsive grid layout.

---

## File: src/app/components/SkillsSection.jsx

**Summary:**

- Skills section displaying a grid of technology icons and names. Responsive design, highlights tech stack (HTML5, CSS3, JavaScript, React, Next.js, Tailwind, Git, Figma).

---

## File: src/app/components/ProjectsSection.jsx

**Summary:**

- Projects section with featured and additional projects. Each project includes name, description, tags, emoji, links, and a breakdown of problem/solution/impact. Modular and ready for expansion.

---

## File: src/app/components/ContactSection.jsx

**Summary:**

- Contact section with social links (GitHub, LinkedIn, Email), styled with a glowing background. Encourages user interaction and connection.

---

## File: src/app/components/Footer.jsx

**Summary:**

- Footer component with copyright and tech credit. Responsive and styled to match the overall theme.

---

**Note:**

- Only relevant text/code/config files are included.
- node_modules, .git, public assets, and build outputs are excluded.
- Each section header includes the file name and path for clarity.
