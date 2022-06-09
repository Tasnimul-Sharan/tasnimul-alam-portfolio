import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const Project = ({ project }) => {
  const { name, description, picture } = project;
  return (
    <CardGroup className="g-5 col-sm-12 col-md-6 col-lg-4">
      <Card bg="dark" text="white">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0">
          <Button variant="success">Details</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Project;
