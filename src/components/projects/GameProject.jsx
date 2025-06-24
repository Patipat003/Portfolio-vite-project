import Card from "../ui/Card";
import { FaGithub, FaGoogleDrive } from "react-icons/fa";

const GameProject = () => {
  return (
    <>
      <Card
        totalSlide={12}
        picSrc={`./projects/game-pic/`}
        title={`Crime Scene Investigation`}
        positions={`Final Project / Game Development`}
        description={`Developed a 3D crime investigation game titled "Crime Investigation" in
        Unity using C# and Object-Oriented Programming (OOP). The game features
        4 levels, where players investigate crime scenes, collect evidence, and
        score points based on correct photos and answers. Designed a Tablet UI
        with features like Crime Details, a Wiki for evidence search, a Gallery
        for photos, and an Exam for additional points. Used OOP principles to
        structure scripts for easy reuse and maintenance. Utilized Unity Asset
        Store assets for level decoration and object placement.`}
        tech={["💻 Unity C#", "📌 Sketchfab, Assets Store"]}
        buttons={[
          {
            link: "https://drive.google.com/file/d/1_xihEVe-ViFV-ksg7FV0qGv_7lbk-MG_/view",
            label: (
              <span className="flex items-center gap-2">
                <FaGoogleDrive /> Download (Google Drive)
              </span>
            ),
          },
          {
            link: "https://github.com/patipat003/UnityGame",
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

export default GameProject;
