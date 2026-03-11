/**
 * Portfolio Data - Personal Information
 */

// Contact Information
const contact = {
  phone: "01828658811",
  email: "wzullah.farhan@gmail.com",
};

// Social Links
const socials = {
  linkedin: "https://www.linkedin.com/in/w2zfrhn",
  github: "https://github.com/w2zfrhn",
  website: "w2zfrhn.com",
};

// Bio / Profile Information
const bio = {
  name: "Kazi Md. Wazeh Ullah Farhan",
  studentId: "23-50577-1",
  tagline:
    "Software Engineering 💻 • Full-Stack Web Development • AI/ML Enthusiast",
  avatar: "👨‍💻",
  description:
    "Hey! I'm Farhan — a Computer Science & Engineering student at AIUB (American International University-Bangladesh) based in Bangladesh. I'm passionate about software engineering, full-stack web development, and exploring the world of Artificial Intelligence and Machine Learning.",
  secondParagraph:
    "I'm currently in my 6th semester and have hands-on experience with C, C++, Java, C#, JavaScript, and SQL. I love building practical applications and exploring new technologies.",
  badges: [
    { name: "C", color: "#a8b9cc" },
    { name: "C++", color: "#00599C" },
    { name: "Java", color: "#ed8b00" },
    { name: "C#", color: "#512bd4" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "SQL", color: "#336791" },
    { name: "AWS", color: "#ff9900" },
  ],
};

// Education Information
const education = {
  university: {
    name: "American International University-Bangladesh (AIUB)",
    department: "Computer Science & Engineering (CSE)",
    semester: "6th Semester",
  },
  hsc: {
    institution: "Holy Land College",
    result: "GPA 5 (Highest Rank)",
    highlights: ["C programming", "HTML", "Basic databases", "Logic gates"],
  },
};

// Technical Skills
const skills = {
  programming: ["C", "C++", "Java", "C#", "JavaScript", "SQL"],
  webDevelopment: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  interests: [
    "Software Engineering",
    "Full-Stack Web Development",
    "Cloud Engineering (AWS)",
    "Artificial Intelligence",
    "Machine Learning",
    "Neural Networks",
    "LLMs",
    "NLP",
  ],
};

// Projects
const projects = [
  {
    icon: "🌾",
    title: "AgriCore Operation Platform / SmartField Resource Platform",
    description:
      "A comprehensive agricultural management system built using C# Windows Forms. Features include User Management, Crop Management, Field Management, Irrigation & Fertilizer Scheduling, Pest & Disease Control, and Market & Sales Tracking.",
    tags: ["C#", "Windows Forms", "SQL", "Desktop App"],
    link: "#",
  },
  {
    icon: "📊",
    title: "Research Project",
    description:
      "Co-authored research paper on 'The Impact of Urban Green Spaces in University Students' Mental Health.'",
    tags: ["Research", "Data Analysis", "Academic"],
    link: "#",
  },
];

// Experience / Education History
const experience = [
  {
    icon: "🎓",
    title: "BSc. in Computer Science & Engineering",
    company: "American International University-Bangladesh (AIUB)",
    period: "2023 – Present",
    details: "Current Semester: 6th",
  },
  {
    icon: "🏫",
    title: "HSC (Higher Secondary Certificate)",
    company: "Holy Land College",
    period: "Completed",
    details: "GPA 5 (Highest Rank)",
  },
];

// Research Work
const research = [
  {
    title:
      "The Impact of Urban Green Spaces in University Students' Mental Health",
    role: "Co-author",
    description:
      "Research paper exploring the relationship between urban green spaces and mental well-being of university students.",
  },
];

// Personal Information
const personal = {
  wife: "Zubaida Binte Amir ❤️",
  tag: "w2zfrhn",
  website: "w2zfrhn.com",
  location: "Kaliganj, Dhaka, Bangladesh 🇧🇩",
};

// Blog Posts (Feed)
const posts = [
  {
    id: 1,
    slug: "y-sorting-in-2d-games",
    date: "Dec 04, 2025",
    title: "Y-Sorting in 2D Games",
    excerpt: 'In the 3D world, the graphics card uses a "Depth Buffer" (Z-buffer) to calculate which pixel is closest to the camera...',
    content: 'To create the illusion of depth, we use the <span class="kw">Painter\'s Algorithm</span>...',
    tags: ["Game Dev", "2D Rendering", "Algorithms", "Graphics"],
    hasDemo: true,
  },
  {
    id: 2,
    slug: "real-time-multiplayer-with-socket-io",
    date: "Nov 18, 2025",
    title: "Real-time Multiplayer with Socket.IO",
    excerpt: "Building real-time applications requires a solid understanding of WebSockets...",
    content: 'In this post, we dive deep into scaling Socket.IO with <span class="kw">ScyllaDB</span>...',
    tags: ["Socket.IO", "Real-time", "ScyllaDB", "Backend"],
    hasDemo: false,
  },
  {
    id: 3,
    slug: "building-a-custom-react-renderer",
    date: "Oct 22, 2025",
    title: "Building a Custom React Renderer",
    excerpt: "React's reconciliation algorithm is fascinating...",
    content: "In this tutorial, we'll build a custom renderer that outputs React components to ASCII art...",
    tags: ["React", "JavaScript", "Rendering", "Open Source"],
    hasDemo: false,
  },
  {
    id: 4,
    slug: "understanding-crdts-for-distributed-systems",
    date: "Sep 15, 2025",
    title: "Understanding CRDTs for Distributed Systems",
    excerpt: "Conflict-free Replicated Data Types (CRDTs) are the secret sauce...",
    content: "We'll dive deep into G-Counters, PN-Counters...",
    tags: ["Distributed Systems", "CRDT", "Backend", "Architecture"],
    hasDemo: true,
  },
  {
    id: 5,
    slug: "how-to-share-localhost-with-cloudflare-tunnel",
    date: "Jan 20, 2026",
    title: "How to Share Your Localhost with the Internet Using Cloudflare Tunnel (Mac, Windows, and Linux)",
    excerpt: "When building a website or web application locally, it usually runs on localhost, which means only your computer can access it. However, sometimes developers need to share their work with teammates, clients, or testers. A reliable solution is Cloudflare Tunnel, a secure tool that allows you to expose your local server to the internet without opening ports or configuring your router.",
    content: "This guide explains how to set up Cloudflare Tunnel on macOS, Windows, and Linux...",
    tags: ["Cloudflare", "DevOps", "Networking", "Tutorial", "Localhost"],
    hasDemo: false,
  },
];