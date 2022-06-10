import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProject from "./Hooks/useProject";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);
  //   const [projects] = useProject(projectId);
  useEffect(() => {
    fetch(`/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log(project);

  return (
    <section className="">
      <h1>Project Details</h1>
      <div class="container my-5">
        <div class="row gy-4">
          <div class="col-lg-8">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={project?.picture}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div class="col-lg-4">
            <Card className="shadow-lg" bg="dark" text="white">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>:
                </li>
                <li>
                  <strong>Client</strong>: {project}
                </li>
                <li>
                  <strong>Project date</strong>:
                </li>
                <li>
                  <strong>Project URL</strong>:
                </li>
              </ul>
            </Card>
            {/* <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
