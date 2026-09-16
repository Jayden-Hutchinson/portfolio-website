/*
    Projects 
    - Ignite Fitness
    - Smokd
    - Arena Tracker
 */

import FlexRow from "./FlexRow";

type Project = {
  name: string;
  image: string;
};

function Projects() {
  const projects: Project[] = [
    {
      name: "Smokd",
      image: "",
    },
    {
      name: "Ignite",
      image: "",
    },
    {
      name: "Arena Tracker",
      image: "",
    },
  ];

  return (
    <FlexRow className="absolute size-200 flex-wrap justify-between border border-white bg-black/50">
      {projects.map((project, _) => (
        <div
          key={project.name}
          className="h-30 w-40 rounded-lg border border-white text-white"
        >
          {project.name}
        </div>
      ))}
    </FlexRow>
  );
}

export default Projects;
