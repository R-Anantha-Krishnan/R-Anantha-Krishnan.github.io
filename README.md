🚀 Anantha Krishnan – Portfolio Website

A personal portfolio website built with React to showcase my work, skills, and professional journey.
The project is designed with clean architecture, semantic HTML, and scalable patterns, and is incrementally enhanced to demonstrate real-world React concepts.

🔗 Live Demo

👉 (Add link after deployment)
https://your-portfolio-url

🛠 Tech Stack

React (Vite)

React Router – client-side routing

JavaScript (ES6+)

CSS (component-scoped, semantic, Tailwind-ready)

HTML5 (Semantic elements)

Git & GitHub

✨ Features

Clean Hero / Landing section

“My Story” section explaining professional journey

Projects showcase

Dedicated Contact page with routing

Semantic HTML for accessibility & SEO

Responsive layout

Scalable folder structure

Ready for future enhancements (Context API, Tailwind, performance optimizations)

🧠 React Concepts Demonstrated

This portfolio is intentionally built to reflect interview-relevant React skills:

Component-based architecture

Page-level routing with React Router

Semantic composition (header, main, section, article, footer)

Clean separation of concerns (sections vs pages)

Reusable components

Scalable CSS structure (co-located styles)

Prepared for:

Context API

Custom Hooks

Memoization (useMemo, useCallback)

Performance optimizations

📁 Project Structure
src/
├── sections/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   └── index.js
│   ├── Story/
│   └── Projects/
├── pages/
│   └── Contact/
│       ├── Contact.jsx
│       ├── Contact.css
│       └── index.js
├── App.jsx
├── main.jsx
├── index.css

🧭 Routing Overview

/ → Home (Hero, Story, Projects)

/contact → Contact page

Routing is handled using React Router, with client-side navigation via <Link /> to avoid full page reloads.

📸 Assets Handling

Static assets (profile image, favicon) are served from the public/ directory.

Component-specific assets can be imported from src/assets/.

▶️ Running Locally
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev

📦 Build for Production
npm run build

🌱 Future Enhancements (Planned)

Theme toggle using Context API

Tailwind CSS migration

Project filtering with memoization

Contact form (EmailJS / Formspree)

SEO meta tags

GitHub Pages / Vercel deployment

Lighthouse performance optimization

🎯 Design Philosophy

Clarity over flash

Scalability over shortcuts

Intentional use of React features

Interview-ready codebase

👤 About Me

Anantha Krishnan
Software Engineer with experience in building React applications and a growing interest in data-driven solutions.

GitHub: https://github.com/your-username

LinkedIn: https://linkedin.com/in/your-profile

Email: your@email.com

📄 License

This project is open-source and available under the MIT License.