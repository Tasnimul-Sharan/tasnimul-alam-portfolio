import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, name, description, picture } = project;
  return (
    <CardGroup
      className="g-5 col-sm-12 col-md-6 col-lg-4"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <Card className="shadow-lg border-0 bg-dark text-light">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 ">
          <Link to={`projetdetails/${_id}`}>
            <Button variant="success">Details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Project;
