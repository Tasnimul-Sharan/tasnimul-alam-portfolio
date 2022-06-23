import React from "react";
import { Card } from "react-bootstrap";

const Skill = ({ skill }) => {
  const { picture } = skill;
  return (
    <div
      className=" g-2 col-sm-12 col-md-6 col-lg-2"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <Card className="shadow-lg" bg="dark" style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Img className="w-75 img-fluid" src={picture} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skill;
