import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://tasnimul-portfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects];
};

export default useProject;
