import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-tundra-58246.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects];
};

export default useProject;
