import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const PosProjects = () => {
  const totalPosSlides = 20;
  const images = Array.from({ length: totalPosSlides }, (_, i) => ({
    id: `pos${i + 1}`,
    src: `/projects/pos-pic/pos-${i + 1}.png`,
  }));

  const [currentPosIndex, setCurrentPosIndex] = useState(0);

  const handleNav = (toPosIndex) => {
    setCurrentPosIndex((toPosIndex + totalPosSlides) % totalPosSlides);
  };

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >

      <div className="carousel w-full rounded-lg">
        {images.map((img, index) => {
          const prev = (index - 1 + totalPosSlides) % totalPosSlides;
          const next = (index + 1) % totalPosSlides;

          return (
            <div key={img.id} id={img.id} className="carousel-item relative w-full">
              <img src={img.src} className="w-full object-contain" alt={`Slide ${index + 1}`} />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#${images[prev].id}`} className="btn btn-circle" onClick={() => handleNav(prev)}>❮</a>
                <a href={`#${images[next].id}`} className="btn btn-circle" onClick={() => handleNav(next)}>❯</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide number display */}
      <div className="absolute center-0 right-4 bg-base-100/80 text-sm px-3 py-1 rounded-full shadow-md text-success font-semibold">
        {currentPosIndex + 1} / {totalPosSlides}
      </div>


      <h1 className="text-3xl font-bold text-success">Simple Retail POS System</h1>
      <p className="text-lg font-semibold">Internship Project / Fullstack Web App</p>
      <p className="text-base text-neutral-content/80 leading-relaxed">
      A web-based POS system that streamlines sales, inventory management, 
      and operations across branches. It features role-based authentication 
      (Cashier, Manager, Auditor), real-time sales and inventory tracking, 
      automated stock updates, and low stock alerts. The sales dashboard, 
      built with ApexCharts, visualizes revenue, top products, and branch performance. 
      It supports inter-branch transfers and restock requests. Itemized, 
      printable receipts are generated for each transaction. 
      The backend API and PostgreSQL database are deployed on a Raspberry Pi 5 for efficient local testing and development.
      </p>
      <ul className="list-disc list-inside text-sm text-success">
        <li>💻 ReactJs, Tailwind, Daisyui</li>
        <li>📌 PostgreSQL, Postman</li>
        <li>🌱 Golang, Gofiber, Gorm</li>
      </ul>

      {/* Github Button */}
      <div className="mt-4">
        <a href="https://github.com/patipat003/PosProject" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
          <FaGithub /> GitHub (Souce Code)
        </a>
      </div>  
    </motion.div>
  );
}

const GameProjects = () => {
  const totalGameSlides = 12;
  const images = Array.from({ length: totalGameSlides }, (_, i) => ({
    id: `game${i + 1}`,
    src: `/projects/game-pic/game-${i + 1}.png`,
  }));

  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const handleNav = (toGameIndex) => {
    setCurrentGameIndex((toGameIndex + totalGameSlides) % totalGameSlides);
  };

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >

      <div className="carousel w-full rounded-lg">
        {images.map((img, index) => {
          const prev = (index - 1 + totalGameSlides) % totalGameSlides;
          const next = (index + 1) % totalGameSlides;

          return (
            <div key={img.id} id={img.id} className="carousel-item relative w-full">
              <img src={img.src} className="w-full object-contain" alt={`Slide ${index + 1}`} />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#${images[prev].id}`} className="btn btn-circle" onClick={() => handleNav(prev)}>❮</a>
                <a href={`#${images[next].id}`} className="btn btn-circle" onClick={() => handleNav(next)}>❯</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide number display */}
      <div className="absolute center-0 right-4 bg-base-100/80 text-sm px-3 py-1 rounded-full shadow-md text-success font-semibold">
        {currentGameIndex + 1} / {totalGameSlides}
      </div>

      <h1 className="text-3xl font-bold text-success">Game Crime Scene </h1>
      <p className="text-lg font-semibold">Final Project / Game Development</p>
      <p className="text-base text-neutral-content/80 leading-relaxed">
      Developed a 3D crime investigation game titled "Crime Investigation" using Unity. 
      The game features core systems including basic player controls, score tracking, point collection, 
      in-level interactions, a photo camera system, and a tablet with a UI interface.
      </p>
      <ul className="list-disc list-inside text-sm text-success">
        <li>💻 Unity C#</li>
        <li>📌 Sketchfab, Assets Store</li>
      </ul>

      {/* Github Button */}
      <div className="mt-4">
        <a href="https://github.com/patipat003/UnityGame" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
          <FaGithub /> GitHub (Souce Code)
        </a>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <PosProjects />
      <GameProjects />
    </div>
  );  
}

export default Projects;    