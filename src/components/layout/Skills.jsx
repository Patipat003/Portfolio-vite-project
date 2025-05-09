import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaReact, FaDatabase } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp, TbBrandVercel } from "react-icons/tb";
import { SiDaisyui, SiUnity, SiPostman, SiDiagramsdotnet, SiNetlify, SiSupabase,  
        SiMongodb, SiTailwindcss, SiLeaflet, SiVite, SiExpress, SiSocketdotio } from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";


const skills = [
  // Programming Languages
  { name: "JavaScript", icon: <BiLogoJavascript />, category: "Programming Languages" },
  { name: "TypeScript", icon: <BiLogoTypescript />, category: "Programming Languages" },
  { name: "HTML", icon: <FaHtml5 />, category: "Programming Languages" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Programming Languages" },
  { name: "C# (Unity)", icon: <TbBrandCSharp />, category: "Programming Languages" },
  { name: "Golang", icon: <FaGolang />, category: "Programming Languages" },

  // Frontend
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "DaisyUI", icon: <SiDaisyui />, category: "Frontend" },
  { name: "Leaflet", icon: <SiLeaflet />, category: "Frontend" },
  { name: "Vite", icon: <SiVite />, category: "Frontend" },

  // Backend
  { name: "NodeJs", icon: <FaNodeJs />, category: "Backend" },
  { name: "Express", icon: <SiExpress />, category: "Backend" },
  { name: "GoFiber", icon: <FaGolang />, category: "Backend" },
  { name: "Gorm", icon: <FaDatabase />, category: "Backend" },
  { name: "Socket.IO", icon: <SiSocketdotio />, category: "Backend" },
  { name: "Postman", icon: <SiPostman />, category: "Backend" },
  
  // Database
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
  { name: "Supabase", icon: <SiSupabase />, category: "Database" },
  
  // Tools
  { name: "VS Code", icon: <DiVisualstudio />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },
  { name: "Unity", icon: <SiUnity />, category: "Tools" },
  { name: "Draw.io", icon: <SiDiagramsdotnet />, category: "Tools" },
  { name: "Netlify", icon: <SiNetlify />, category: "Tools" },
  { name: "Vercel", icon: <TbBrandVercel />, category: "Tools" },
];

const Skills = () => {
  return (
    <motion.div
      className="flex w-full flex-col items-center text-neutral-content text-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SkillSection title="- Programming Languages -" skills={skills} category="Programming Languages" />
      <SkillSection title="- Frontend -" skills={skills} category="Frontend" />
      <SkillSection title="- Backend -" skills={skills} category="Backend" />
      <SkillSection title="- Database -" skills={skills} category="Database" />
      <SkillSection title="- Tools -" skills={skills} category="Tools" />
    </motion.div>
  );
};

const SkillSection = ({ title, skills, category }) => (
  <motion.div
    className="w-full px-8 mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-xl font-semibold mb-8 text-center">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
      {skills
        .filter((skill) => skill.category === category)
        .map((skill, index) => (
          <motion.div
            key={index}
            className="w-full h-36 flex flex-col justify-center items-center rounded-lg shadow-lg text-white p-4"
            whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-center text-base">{skill.name}</p>
          </motion.div>
        ))}
    </div>
    <div className="divider lg:divider-vertical"></div>
  </motion.div>
);

export default Skills;
