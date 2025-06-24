import Card from "../ui/Card";
import { FaGithub } from "react-icons/fa";

const StockProject = () => {
  return (
    <>
      <Card
        totalSlide={8}
        picSrc={`./projects/stock-pic/`}
        title={`Magnificent 7 Stocks Tracker`}
        positions={`Personal Project / Full Stack Web Development`}
        description={`Developed a fullstack web app to monitor the “Magnificent 7” US tech
        stocks, featuring per-stock pages with real-time price, premarket data,
        high/low, volume, and related news headlines. Each stock includes an
        interactive chart with time filters (weekly, monthly, yearly) for better
        trend analysis. Users log in via token-based authentication and access
        live, room-based chat discussions by Socket.IO. The backend (Node.js,
        Express, MongoDB) is deployed on AWS EC2, fetching and storing stock
        data from the Yahoo Finance API with HTTPS secured via Nginx and Let's
        Encrypt. The frontend, built with React, Vite, Tailwind and deployed on
        Vercel.`}
        tech={[
          "💻 ReactJs, Tailwind, Daisyui",
          "🌱 Nodejs, Express",
          "📌 MongoDB, Postman, Vercel",
        ]}
        buttons={[
          {
            link: "https://www.mag7tracker.xyz/",
            label: "🌐 Website (Demo)",
          },
          {
            link: "https://github.com/Patipat003/mag7-stock-tracker",
            label: (
              <span className="flex items-center gap-2">
                <FaGithub /> GitHub (Source Code)
              </span>
            ),
          },
        ]}
      />
    </>
  );
};

export default StockProject;
