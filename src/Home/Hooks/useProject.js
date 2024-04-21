import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects];
};

export default useProject;
