import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const PosProjects = () => {
  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-success">Simple Retail POS System – Fullstack Web App</h1>
      <p className="text-lg font-semibold">Internship Project</p>
      <p className="text-base text-neutral-content/80 leading-relaxed">
      A web-based Point-of-Sale (POS) system designed to streamline product sales, 
      inventory management, and operations across multiple branches.
      The platform features role-based authentication for Cashier, Manager, 
      and Auditor roles, ensuring secure and structured access control. 
      It includes real-time sales and inventory tracking with automated stock updates 
      and low stock alerts to maintain optimal inventory levels. A comprehensive sales dashboard, 
      built with ApexCharts, visualizes key metrics such as revenue, top-selling products, and branch performance. 
      The system also supports inter-branch product transfers and warehouse restock requests. Itemized, 
      printable sales receipts are generated for every transaction. The backend API and PostgreSQL 
      database are deployed on a Raspberry Pi 5, providing a compact and efficient environment for local testing and development.
      </p>
      <ul className="list-disc list-inside text-sm text-success">
        <li>💻 React, Tailwind, Daisyui</li>
        <li>📌 PostgreSQL, Postman</li>
        <li>🌱 Golang, Gofiber, GoGorm</li>
      </ul>

      {/* Github Button */}
      <div className="mt-4">
        <a href="https://github.com/patipat003/PosProject" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
          <FaGithub /> GitHub
        </a>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const GameProjects = () => {
  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-success">Game Crime Scen – Game Development</h1>
      <p className="text-lg font-semibold">Final Project</p>
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

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
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