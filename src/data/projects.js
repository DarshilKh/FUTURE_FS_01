export const projects = [
  // ============ FULLSTACK ============
  {
    id: 1,
    title: "Scribble Clone",
    description:
      "A real-time multiplayer drawing and guessing game. Players take turns drawing while others guess the word — built with WebSockets for live sync.",
    tech: ["Spring Boot", "WebSocket", "React", "MySQL"],
    category: "fullstack",
    image: "🎨",
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/DarshilKh/skribbl-clone", // ← change to your real link
    live: "skribblclone.netlify.app/",             // ← change to your real link
    hasLive: true,
  },
  {
    id: 2,
    title: "AI Email Writer",
    description:
      "An AI-powered email generation tool that helps users write professional emails instantly using prompt-based generation.",
    tech: ["Spring Boot", "React", "AI API", "MySQL"],
    category: "fullstack",
    image: "✉️",
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/DarshilKh/email-writer-frontend", // ← change
    live: "email-writer-front.netlify.app/",              // ← change
    hasLive: true,
  },

  {
    id: 3,
    title: "TaskFlow",
    description:
      "A full-stack task manager with clean UI, REST API integration, and real-time task updates.",
    tech: ["React", "Spring Boot", "H2", "REST API"],
    category: "fullstack",
    image: "📝",
    color: "from-emerald-500 to-teal-500",
    github: "https://github.com/DarshilKh/TaskFlow",
    live: "https://taskflow0021.netlify.app",
    hasLive: true,
},

  {
    id: 4,
    title: "Netflix Clone",
    description:
      "A full-stack Netflix-inspired streaming platform with movie browsing, trailers, and user authentication.",
    tech: ["React", "Firebase", "MySQL", "TMDB API"],
    category: "fullstack",
    image: "🎬",
    color: "from-red-600 to-rose-500",
    github: "https://github.com/DarshilKh/netflix-clone-app", // ← change
    live: null,
    hasLive: false,
  },
  

  // ============ FRONTEND ============
  {
    id: 5,
    title: "Prashikshan",
    description:
      "An online learning platform UI with course listings, progress tracking, and a clean responsive design for students.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    image: "📚",
    color: "from-orange-500 to-amber-500",
    github: "https://github.com/DarshilKh/prashikshan-frontend", // ← change
    live: "prashikshan-frontend.netlify.app/",              // ← change
    hasLive: true,
  },
  {
    id: 6,
    title: "Therapy Website",
    description:
      "A calm, minimal therapy and mental wellness website with appointment booking UI, testimonials, and service sections.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    image: "🧘",
    color: "from-teal-500 to-cyan-500",
    github: "https://github.com/DarshilKh/therapy-website", // ← change
    live: "dr-maya-therapy.netlify.app/",              // ← change
    hasLive: true,
  },
  {
    id: 7,
    title: "Landing Page",
    description:
      "A high-converting SaaS product landing page with animated hero section, features, pricing, and CTA components.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    image: "🚀",
    color: "from-indigo-500 to-purple-500",
    github: "https://github.com/DarshilKh/chai-culture-coming-soon", // ← change
    live: "chai-culture-comingsoon.netlify.app",              // ← change
    hasLive: true,
  },
  {
    id: 8,
    title: "Youtube Clone",
    description:
      "A pixel-perfect YouTube frontend clone with video feed, search, sidebar navigation, and responsive layout.",
    tech: ["React", "YouTube API", "Tailwind CSS"],
    category: "frontend",
    image: "▶️",
    color: "from-red-500 to-orange-500",
    github: "https://github.com/DarshilKh/youtube-clone", // ← change
    live: null,
    hasLive: false,
  },

  // ============ BACKEND ============
  {
    id: 9,
    title: "Whatsapp Chatbot",
    description:
      "A WhatsApp bot built using Twilio API that handles automated replies, FAQs, and scheduled messages.",
    tech: ["Spring Boot",  "REST API"],
    category: "backend",
    image: "💬",
    color: "from-green-500 to-emerald-500",
    github: "https://github.com/DarshilKh/WhatsApp-Chatbot-Backend-Simulation", // ← change
    live: "https://whatsapp-chatbot-backend-simulation-oj0s.onrender.com/",         // ← change
    hasLive: true,
  },
  {
    id: 10,
    title: "SmartTaskManager",
    description:
      "A backend-heavy task management REST API with priority queues, deadline reminders, and user role management.",
    tech: ["Spring Boot", "JPA", "MySQL", "REST API"],
    category: "backend",
    image: "⚙️",
    color: "from-blue-600 to-indigo-500",
    github: "https://github.com/DarshilKh/SmartTaskManager", // ← change
    live: null,
    hasLive: false,
  },
  {
    id: 11,
    title: "UserManagement",
    description:
      "A complete user management system with CRUD operations, role-based access, pagination, and search filtering.",
    tech: ["Spring Boot", "JPA", "H2", "REST API"],
    category: "backend",
    image: "👥",
    color: "from-purple-500 to-violet-500",
    github: "https://github.com/DarshilKh/UserManagement", // ← change
    live: null,
    hasLive: false,
  },
  {
    id: 12,
    title: "Chatting Application",
    description:
      "A real-time chat backend using WebSockets supporting multiple rooms, private messaging, and message history.",
    tech: ["Spring Boot", "WebSocket", "MySQL", "STOMP"],
    category: "backend",
    image: "💭",
    color: "from-pink-500 to-rose-500",
    github: "https://github.com/DarshilKh/Chatting-Application-", // ← change
    live: null,
    hasLive: false,
  },
];

export const projectFilters = [
  { key: "all", label: "All", icon: "Globe" },
  { key: "fullstack", label: "Full Stack", icon: "Cpu" },
  { key: "backend", label: "Backend", icon: "Terminal" },
  { key: "frontend", label: "Frontend", icon: "Layout" },
];