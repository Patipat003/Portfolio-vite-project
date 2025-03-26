import React from "react";
import { motion } from "framer-motion";  // ✅ เพิ่ม Framer Motion
import { FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaUnity, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiVisualstudio } from "react-icons/di";
import { AiOutlineOpenAI } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <FaJs />, category: "Programming Languages" },
  { name: "HTML", icon: <FaHtml5 />, category: "Programming Languages" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Programming Languages" },
  { name: "SQL", icon: <FaDatabase />, category: "Programming Languages" },
  { name: "C#", icon: <TbBrandCSharp />, category: "Programming Languages" },
  { name: "Go", icon: <FaGolang />, category: "Programming Languages" },

  { name: "React", icon: <FaReact />, category: "Frameworks" },
  { name: "Fiber", icon: <FaReact />, category: "Frameworks" },
  { name: "Tailwind CSS", icon: <FaReact />, category: "Frameworks" },
  { name: "DaisyUI", icon: <FaReact />, category: "Frameworks" },

  { name: "VS Code", icon: <DiVisualstudio />, category: "Tools" },
  { name: "Unity", icon: <FaUnity />, category: "Tools" },
  { name: "ChatGPT", icon: <AiOutlineOpenAI />, category: "Tools" },
];

const Skills = () => {
  return (
    <motion.div 
      className="flex w-full flex-col items-center text-neutral-content text-lg"
      initial={{ opacity: 0, y: 50 }}  // ✅ เฟดอินและขยับขึ้น
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold my-8 text-success">Skills</h1>

      <SkillSection title="- Programming Languages -" skills={skills} category="Programming Languages" />
      <SkillSection title="- Frameworks -" skills={skills} category="Frameworks" />
      <SkillSection title="- Tools -" skills={skills} category="Tools" />
    </motion.div>
  );
};

// ✅ ใช้ motion.div และ animate ให้แต่ละ card มีเอฟเฟกต์
const SkillSection = ({ title, skills, category }) => (
  <motion.div 
    className="w-full px-8 mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-xl font-semibold mb-8 text-center">{title}</h2>
    <div className="grid grid-cols-4 gap-6">
      {skills
        .filter((skill) => skill.category === category)
        .map((skill, index) => (
          <motion.div
            key={index}
            className="w-full h-42 flex flex-col justify-center items-center rounded-lg shadow-lg text-white mb-8"
            whileHover={{ scale: 1.1, backgroundColor: "#4F46E5" }} // ✅ Hover effect
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </motion.div>
          
        ))}
    </div>
    <div className="divider lg:divider-vertical"></div>
  </motion.div>
);

export default Skills;
