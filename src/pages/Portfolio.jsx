import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";
import Projects from "../components/layout/Projects";

const Portfolio = () => {
  return (
    <div id="home" data-theme="synthwave" className="bg-base-200 text-neutral-content font-sans ">
      <Header />
      <div id="home" className="w-full max-w-screen-lg mx-auto px-4 py-2 bg-base-200 text-neutral-content">
  
        {/* Info Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-7 lg:gap-8 mt-16 items-center space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Avatar */}
          <div className="md:col-span-2 flex justify-center m-6">
            <div className="lg:h-96 lg:w-[500px] w-1/3 mask shadow-lg">
              <img
                src="https://i.pinimg.com/736x/d1/46/ee/d146eebbdad889c894ddf32bdde66856.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>


          {/* Bio */}
          <motion.div
            className="md:col-span-5 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="md:text-3xl text-xl font-bold text-success">Patipat Singhasri (Champ)</h1>
            <p className="text-base text-neutral-content/80 leading-relaxed">
              I'm a recent Information Technology graduate from Mahasarakham University with 4 months of internship experience in full-stack development using 
              <strong> React</strong>, <strong>Tailwind CSS</strong>, <strong>Golang</strong>, and <strong>PostgreSQL</strong>. 
              I enjoy building clean, user-friendly interfaces and am eager to keep learning and improving. 
              I'm seeking a role as a <strong>Junior Frontend Developer</strong> to grow with an experienced team, 
              and I’m also open to opportunities in <strong>System Analyst</strong> roles.
            </p>
            <ul className="list-disc list-inside text-sm text-success">
              <li>💻 Front-end Developer | Full-stack Enthusiast</li>
              <li>📌 Passionate about UI/UX, Performance, and Scalability</li>
              <li>🌱 Always learning and exploring new technologies</li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/patipat003" target="_blank" rel="noreferrer">
                <FaGithub className="text-xl hover:text-primary transition" />
              </a>
              <a href="mailto:patipat.singhasri@gmail.com">
                <FaEnvelope className="text-xl hover:text-primary transition" />
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a href="/Patipat's Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success">
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <section id="skills" className="mt-16">

          {/* Divider */}
          <div className="mt-16 mb-8">
            <div className="divider before:bg-success after:bg-success font-bold text-success text-2xl">Skills</div>
          </div>

          <Skills />
        </section>
        
        {/* Projects Section */}
        <section id="projects">

          {/* Divider */}
          <div className="mt-16 mb-8">
            <div className="divider before:bg-success after:bg-success font-bold text-success text-2xl">Projects</div>
          </div>

          <Projects />
        </section>
      </div>
      <footer className="text-center text-xs text-gray-500 my-6">
        © {new Date().getFullYear()} Patipat Singhasri. All rights reserved.
      </footer>
    </div>  
    
  );
};

export default Portfolio;
