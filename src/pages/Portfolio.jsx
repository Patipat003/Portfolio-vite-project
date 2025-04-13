import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";

const Portfolio = () => {
  return (
    <div data-theme="synthwave" className="w-full max-w-screen-lg mx-auto px-4 mx-8 bg-base-200 font-sans">
      <Header />

      <motion.div
        className="flex w-full flex-col lg:flex-row gap-4 p-4"
        initial={{ opacity: 0, y: 50 }}  // ✅ เฟดอินและขยับขึ้น
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        

      {/* Information */}
      {/* <motion.div className="flex w-full flex-col lg:flex-row gap-4 p-4"> */}
        
        <div className="card grow max-w-xs mx-auto lg:max-w-md place-items-center">
          <div className="avatar">
            <div className="w-72 overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid h-32 grow place-items-center flex flex-col p-4">
          <div>
            <div className="mb-8 font-semibold text-3xl text-success">Patipat Singhasri</div>
            <div className="mockup-code bg-base-100 text-primary-content w-full">
              <pre data-prefix="$" className="text-success ">
                <code>
                  👋 Hello! My name is Patipat Singhasri. <span className="text-primary">I am a passionate Software
                     Developer </span>
                </code>
              </pre>
              <pre data-prefix=">" className="text-primary">
                <code> specializing in Developer specializing in full-stack web development. </code>
              </pre>
              <pre data-prefix=">" className="text-primary">
                <code> With experience in React, Vue, Nuxt3, Node.js, and MySQL, </code>
              </pre> 
              <pre data-prefix=">" className="text-primary">
                <code> I have the skills to build, maintain, </code>
              </pre> 
              <pre data-prefix=">" className="text-primary">
                <code> and optimize both frontend and backend systems.  </code>
              </pre> 
              <pre data-prefix=">" className="text-primary">
                <code> I am committed to continuous learning and leveraging cutting-edge </code>
              </pre>
              <pre data-prefix=">" className="text-primary">
                <code> technologies to develop efficient and user-centric applications. </code>
              </pre> 
              <pre data-prefix=">" className="text-primary">
                <code> Looking forward to bringing my expertise to your organization! 🚀  </code>
              </pre> 
              <pre data-prefix=">" className="text-info">
                <code>💻 Front-end Developer | Full-stack Enthusiast</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>📌 Passionate about UI/UX, Performance, and Scalability</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>🌱 Always learning and exploring new technologies</code>
              </pre>
            </div>

          </div>
        </div>
      </motion.div>
      <div className="mt-20">
        <div className="divider lg:divider-vertical"></div>
        
        {/* Skills */}
        <Skills />
      </div>
      
    </div>
  );
};

export default Portfolio;
