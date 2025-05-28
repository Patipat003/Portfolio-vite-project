import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "flowbite-react";

const PosProjects = () => {
  const totalPosSlides = 22;
  const images = Array.from({ length: totalPosSlides }, (_, i) => ({
    id: `pos${i + 1}`,
    src: `/projects/pos-pic/pos-${i + 1}.png`,
  }));

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      <div className="h-96 xl:h-132">
        <Carousel slideInterval={5000}>
          {images.map((img, index) => (
            <img key={img.id} src={img.src} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>

      <h1 className="text-3xl font-bold text-success">Simple Retail POS System</h1>
      <p className="text-lg font-semibold">Internship Project / Full Stack Web Development</p>
      <p className="text-neutral-content/80 leading-relaxed">
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
        <li>🌱 Golang, Gofiber, Gorm</li>
        <li>📌 PostgreSQL, Postman</li>
      </ul>

      <div className="flex flex-rows space-x-4">
        {/* Web Button */}
        <div>
          <a href="https://pos-demo-pi.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
              🌐 Website (Demo)
          </a>
        </div> 

        {/* Github Button */}
        <div className="">
          <a href="https://github.com/patipat003/PosProject" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
            <FaGithub /> GitHub (Souce Code)
          </a>
        </div>

        {/* Api spec Button */}
        <div>
          <a href="/API Specification (POS).pdf" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
            📄 Api Specification (PDF)
          </a>
        </div>  
      </div>  
    </motion.div>
  );
}

const StockProjects = () => {
  const totalStockSlides = 8;
  const images = Array.from({ length: totalStockSlides }, (_, i) => ({
    id: `stock${i + 1}`,
    src: `/projects/stock-pic/stock-${i + 1}.png`,
  }));

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >

      <div className="h-96 xl:h-132">
        <Carousel slideInterval={5000}>
          {images.map((img, index) => (
            <img key={img.id} src={img.src} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>

      <h1 className="text-3xl font-bold text-success">Magnificent 7 Stocks Tracker</h1>
      <p className="text-lg font-semibold">Personal Project / Full Stack Web Development</p>
      <p className="text-neutral-content/80 leading-relaxed">
        Developed a fullstack web app to monitor the “Magnificent 7” US tech stocks, 
        featuring per-stock pages with real-time price, premarket data, high/low, 
        volume, and related news headlines. Each stock includes an interactive chart with time filters 
        (weekly, monthly, yearly) for better trend analysis. Users log in via 
        token-based authentication and access live, room-based chat discussions 
        by Socket.IO. The backend (Node.js, Express, MongoDB) is deployed on AWS EC2, 
        fetching and storing stock data from the Yahoo Finance API 
        with HTTPS secured via Nginx and Let's Encrypt. The frontend, 
        built with React, Vite, Tailwind and deployed on Vercel.
      </p>
      <ul className="list-disc list-inside text-sm text-success">
        <li>💻 ReactJs, Tailwind, Daisyui</li>
        <li>🌱 Nodejs, Express</li>
        <li>📌 MongoDB, Postman, Vercel</li>
      </ul>

      <div className="flex flex-rows space-x-4">
        {/* Web Button */}
        <div>
          <a href="https://www.mag7tracker.xyz/" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
            🌐 Website (Demo)
          </a>
        </div> 

        {/* Github Button */}
        <div className="">
          <a href="https://github.com/Patipat003/mag7-stock-tracker" target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
            <FaGithub /> GitHub (Souce Code)
          </a>
        </div>
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

  return (
    <motion.div
      className="md:col-span-7 backdrop-blur-md bg-base-100/60 p-6 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >

      <div className="h-96 xl:h-132">
        <Carousel slideInterval={5000}>
          {images.map((img, index) => (
            <img key={img.id} src={img.src} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>

      <h1 className="text-3xl font-bold text-success">Game Crime Scene </h1>
      <p className="text-lg font-semibold">Final Project / Game Development</p>
      <p className="text-neutral-content/80 leading-relaxed">
        Developed a 3D crime investigation game titled "Crime Investigation" in Unity 
        using C# and Object-Oriented Programming (OOP). The game features 4 levels, 
        where players investigate crime scenes, collect evidence, 
        and score points based on correct photos and answers. Designed a Tablet UI 
        with features like Crime Details, a Wiki for evidence search, a Gallery for photos, 
        and an Exam for additional points. Used OOP principles to structure scripts 
        for easy reuse and maintenance. Utilized Unity Asset Store assets 
        for level decoration and object placement.
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
      <StockProjects />
      <GameProjects />
    </div>
  );  
}

export default Projects;    