import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useProject from "./Hooks/useProject";

const ProjectDetails = () => {
  const { projectId } = useParams();
  // const [project, setProject] = useState([]);
  // const [projects] = useProject(projectId);
  // useEffect(() => {
  //   fetch(`https://tasnimul-portfolio-server.vercel.app/projects/${projectId}`)
  //     .then((res) => res.json())
  //     .then((data) => setProject(data));
  // }, []);
  // const [reload, setReload] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`https://tasnimul-portfolio-server.vercel.app/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
    // setReload(!reload);
  }, []);

  // console.log(projects);

  // const projectUrl = [
  //   {id: 1, url:"https://warehouse-management-264df.web.app/", }
  //   {id: 1, url:"https://warehouse-management-264df.web.app/", }
  //   {id: 1, url:"https://warehouse-management-264df.web.app/", }
  //   "https://warehouse-management-264df.web.app/",
  //   "https://independent-service-prov-ba570.web.app/",
  //   "https://manufacturer-website-c6d47.web.app/",
  // ];

  return (
    <section className="">
      <h1 className="text-primary">Project Details </h1>
      <div class="container my-5">
        <div class="row gy-4">
          <div class="col-lg-8">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={projects?.picture}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={projects?.pictureTwo}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={projects?.pictureThree}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div class="col-lg-4">
            <Card
              className="shadow-lg bg-dark text-white"
              style={{ width: "20rem" }}
            >
              {/* <h3>Project information</h3> */}
              <h5> {projects?.name}</h5>
              <ul>
                <li>{projects?.detailsOne}</li>
                <li>{projects?.detailsTwo}</li>
                <li>{projects?.detailsThree}</li>
                <li>{projects?.detailsFour}</li>
                <li>{projects?.detailsFive}</li>
              </ul>
              <Card.Footer className="border-0 d-flex justify-content-between">
                <a target="_blank" rel="noreferrer" href={projects?.ProjectUrl}>
                  <Button variant="outline-primary">Live Website</Button>
                </a>
                <a target="_blank" rel="noreferrer" href={projects?.gitHubLink}>
                  <Button variant="outline-success">Github Link</Button>
                </a>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
