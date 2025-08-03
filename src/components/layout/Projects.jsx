import Card from "../ui/Card";
import { ProjectsData } from "../projects/ProjectData";

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1">
        {ProjectsData.map((project) => (
          <Card
            key={project.id}
            totalSlide={project.totalSlide}
            picSrc={project.picSrc}
            title={project.title}
            positions={project.positions}
            description={project.description}
            tech={project.tech}
            buttons={project.buttons}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
