import useProject from "./Hooks/useProject";
import Project from "./Project";

const Projects = () => {
  const [projects] = useProject();

  return (
    <div className="my-5">
      <h1 className="text-primary">My Projects</h1>
      <div className="row">
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
