import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";
import Projects from "../components/layout/Projects";
import Contact from "../components/layout/Contact";
import Button from "../components/ui/Button";
import { Toaster } from "sonner";

const Portfolio = () => {
  return (
    <>
      <Toaster />
      <div
        id="home"
        data-theme="synthwave"
        className="bg-base-200 text-neutral-content font-sans "
      >
        <Header />
        <div
          id="home"
          className="w-full max-w-screen-lg mx-auto px-4 py-2 bg-base-200 text-neutral-content overflow-x-hidden"
        >
          {/* Info Section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-7 lg:gap-8 mt-8 items-center space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Avatar */}
            <div className="md:col-span-2 flex justify-center m-6">
              <div className="lg:h-72 lg:w-[460px] w-2/4 md:w-1/4 mask shadow-lg">
                <img
                  src="\Selfpic.png"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bio */}
            <motion.div
              className="md:col-span-5 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 2, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="md:text-3xl text-xl font-bold text-success">
                Patipat Singhasri (Champ)
              </h1>
              <p className="text-base text-neutral-content/80 leading-relaxed">
                I'm a recent Information Technology graduate from Mahasarakham
                University with 4 months of internship experience in full-stack
                development. I enjoy building clean, user-friendly interfaces
                and continuously seek to learn and grow. I'm especially
                interested in working as a <strong>Frontend Developer</strong>,
                but I'm also capable of handling
                <strong> Fullstack</strong> or <strong>Backend</strong> tasks
                when needed. I'm also open to opportunities in
                <strong> System Analyst</strong> roles.
              </p>
              <ul className="list-disc list-inside text-sm text-success">
                <li>💻 Front-end Developer | Full-stack Enthusiast</li>
                <li>📌 Passionate about UI/UX, Performance, and Scalability</li>
                <li>🌱 Always learning and exploring new technologies</li>
              </ul>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/patipat003"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-xl hover:text-primary transition" />
                </a>
                <a href="mailto:patipat.singhasri@gmail.com">
                  <FaEnvelope className="text-xl hover:text-primary transition" />
                </a>
              </div>

              {/* Download Resume Button */}
              <Button link="./Patipat's Resume.pdf" text="📄 Download Resume" />
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-26">
            {/* Divider */}
            <div className="mt-16 mb-8">
              <div className="divider before:bg-success after:bg-success font-bold text-success text-2xl">
                Skills
              </div>
            </div>

            <Skills />
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-26">
            {/* Divider */}
            <div className="mt-16 mb-8">
              <div className="divider before:bg-success after:bg-success font-bold text-success text-2xl">
                Projects
              </div>
            </div>
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-26">
            {/* Divider */}
            <div className="mt-16 mb-8">
              <div className="divider before:bg-success after:bg-success font-bold text-success text-2xl">
                Contact
              </div>
            </div>

            <Contact />
          </section>
        </div>

        {/* footer Section */}
        <footer className="text-center text-xs text-gray-500 my-6">
          © {new Date().getFullYear()} Patipat Singhasri. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
