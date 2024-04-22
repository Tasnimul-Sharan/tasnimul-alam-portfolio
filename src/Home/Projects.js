import useProject from "./Hooks/useProject";
import Project from "./Project";

const Projects = () => {
  const [projects] = useProject();

  return (
    <div className=" bg-gray-900 py-8 relative">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-10">
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
