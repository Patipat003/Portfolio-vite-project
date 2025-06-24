import PosProject from "../projects/PosProject";
import StockProject from "../projects/StockProject";
import GameProject from "../projects/GameProject";

const Projects = () => {
  return (
    <div className="col grid-cols-1 mt-6">
      <PosProject />
      <StockProject />
      <GameProject />
    </div>
  );
};

export default Projects;
