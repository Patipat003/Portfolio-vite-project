import { FaGithub, FaGoogleDrive, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsData = [
  {
    id: "game-project",
    totalSlide: 12,
    picSrc: "./projects/game-pic/",
    title: "Crime Scene Investigation",
    positions: "Final Project / Game Development",
    description: `Developed a 3D crime investigation game Unity. The game features
        4 levels, where players investigate crime scenes, collect evidence, and
        score points based on correct photos and answers. Designed a Tablet UI
        with features like Crime Details, a Wiki for evidence search, a Gallerys
        for photos, and an Exam for additional points. Utilized Unity Asset
        Store assets for level decoration and object placement.`,
    tech: ["Unity C#", "Sketchfab", "Assets Store"],
    buttons: [
      {
        link: "https://drive.google.com/file/d/1_xihEVe-ViFV-ksg7FV0qGv_7lbk-MG_/view",
        label: (
          <span className="flex items-center gap-2">
            <FaGoogleDrive /> Google Drive
          </span>
        ),
      },
      {
        link: "https://github.com/patipat003/UnityGame",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
    ],
  },
  {
    id: "pos-project",
    totalSlide: 22,
    picSrc: "./projects/pos-pic/",
    title: "Simple Retail POS System",
    positions: "Internship Project / Full Stack Web Development",
    description: `A web-based POS system with role-based authentication, real-time sales/inventory tracking, 
    automated stock management, ApexCharts dashboard, inter-branch transfers, printable receipts, 
    and PostgreSQL backend deployed on Raspberry Pi 5.`,
    tech: [
      "ReactJs",
      "Tailwind CSS",
      "Daisyui",
      "Golang",
      "Gofiber",
      "Gorm",
      "PostgreSQL",
      "Postman",
    ],
    buttons: [
      {
        link: "https://github.com/patipat003/PosProject",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "/API Specification (POS).pdf",
        label: "📄 API Specification (PDF)",
      },
      {
        link: "https://pos-demo-pi.vercel.app/",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
  {
    id: "stock-project",
    totalSlide: 8,
    picSrc: "./projects/stock-pic/",
    title: "Magnificent 7 Stocks Tracker",
    positions: "Personal Project / Full Stack Web Development",
    description: `Developed a fullstack web app to monitor the “Magnificent 7” US tech
        stocks, featuring per-stock pages with real-time price and details. Each stock includes an
        interactive chart with time filters (weekly, monthly, yearly) for better
        trend analysis. fetching and storing stock data from the Yahoo Finance API. 
        The frontend, built with React, Vite, Tailwind and deployed on Vercel.`,
    tech: [
      "ReactJs",
      "Tailwind CSS",
      "Daisyui",
      "NodeJs",
      "Express",
      "MongoDB",
      "Postman",
      "Vercel",
      "Render",
    ],
    buttons: [
      {
        link: "https://github.com/Patipat003/mag7-stock-tracker",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "https://www.mag7tracker.xyz/",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
  {
    id: "synthspells-project",
    totalSlide: 4,
    picSrc: "./projects/synthspells-pic/",
    title: "SynthSpells AI Playlist Songs",
    positions: "Personal Project / Full Stack Web Development",
    description: `Developed SynthSpells, an AI-powered app that creates personalized YouTube playlists 
    from user input using OpenAI and Youtube API. Hosting on Vercel.`,
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "Youtube API",
      "Postman",
      "Vercel",
    ],
    buttons: [
      {
        link: "https://github.com/Patipat003/synthspells",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "https://synthspells.vercel.app",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
  {
    id: "todo-project",
    totalSlide: 2,
    picSrc: "./projects/todo-pic/",
    title: "Basic Todo-List App",
    positions: "Personal Project / Frontend Web Development",
    description: `Developed a basic Todo app using React, allowing users to create, read, update, and delete tasks. 
    Implemented features like local storage for task persistence and a responsive design using Tailwind CSS.`,
    tech: ["ReactJs", "Tailwind CSS", "TypeScript", "Vercel"],
    buttons: [
      {
        link: "https://github.com/Patipat003/react-todo-list",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "https://react-todo-list-khaki-rho.vercel.app/",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
  {
    id: "chatapp-project",
    totalSlide: 5,
    picSrc: "./projects/chat-pic/",
    title: "Realtime Chat App",
    positions: "Personal Project / Full Stack Web Development",
    description: `Developed a Realtime Chat App using React, Socket.io and Express, allowing users to communicate in real-time. 
    Implemented features like user authentication, user customization,
    chat rooms, text messaging, sending pictures and notifications, and a responsive design using Tailwind CSS. 
    Use Cloudinary for image storage and deployed backend on Render and frontend on Vercel.`,
    tech: [
      "ReactJs",
      "Tailwind CSS",
      "Socket.io",
      "NodeJs",
      "Express",
      "Cloudinary",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    buttons: [
      {
        link: "https://github.com/Patipat003/chat-app-project",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "https://chat-app-sepia-iota-83.vercel.app",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
  {
    id: "newsblog-project",
    totalSlide: 3,
    picSrc: "./projects/blogs-pic/",
    title: "News Blog App",
    positions: "Personal Project / Frontend Web Development",
    description: `Developed a dynamic news blog using React and NewsAPI, featuring slug-based routing for article pages. Implemented structured layouts to display article titles, author names, source sites, and images. Designed a responsive UI with Tailwind CSS. deployed on Vercel.`,
    tech: ["NextJs", "TypeScript", "Tailwind CSS", "Newsapi", "Vercel"],
    buttons: [
      {
        link: "https://github.com/Patipat003/nextjs-basic-blogs",
        label: (
          <span className="flex items-center gap-2">
            <FaGithub /> Source Code
          </span>
        ),
      },
      {
        link: "https://news-blogs-projectz.vercel.app",
        label: (
          <span className="flex items-center gap-2">
            <FaExternalLinkAlt /> Demo
          </span>
        ),
      },
    ],
  },
];

export default ProjectsData;
