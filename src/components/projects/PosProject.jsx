import Card from "../ui/Card";
import { FaGithub } from "react-icons/fa";

const PosProject = () => {
  return (
    <>
      <Card
        totalSlide={22}
        picSrc={`./projects/pos-pic/`}
        title={`Simple Retail POS System`}
        positions={`Internship Project / Full Stack Web Development`}
        description={`A web-based POS system that streamlines sales, inventory management, and operations across branches. It features role-based authentication (Cashier, Manager, Auditor), real-time sales and inventory tracking, automated stock updates, and low stock alerts. The sales dashboard, built with ApexCharts, visualizes revenue, top products, and branch performance. It supports inter-branch transfers and restock requests. Itemized, printable receipts are generated for each transaction. The backend API and PostgreSQL database are deployed on a Raspberry Pi 5 for efficient local testing and development.`}
        tech={[
          "💻 ReactJs, Tailwind, Daisyui",
          "🌱 Golang, Gofiber, Gorm",
          "📌 PostgreSQL, Postman",
        ]}
        buttons={[
          {
            link: "https://pos-demo-pi.vercel.app/",
            label: "🌐 Website (Demo)",
          },
          {
            link: "https://github.com/patipat003/PosProject",
            label: (
              <span className="flex items-center gap-2">
                <FaGithub /> GitHub (Source Code)
              </span>
            ),
          },
          {
            link: "/API Specification (POS).pdf",
            label: "📄 API Specification (PDF)",
          },
        ]}
      />
    </>
  );
};

export default PosProject;
