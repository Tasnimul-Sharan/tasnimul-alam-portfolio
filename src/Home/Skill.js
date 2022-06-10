import React from "react";
import { Card } from "react-bootstrap";

const Skill = ({ skill }) => {
  const { picture } = skill;
  return (
    <div
      className=" g-2 col-sm-12 col-md-6 col-lg-2"
      data-aos="fade-left"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <Card className="shadow-lg" bg="dark" style={{ width: "6rem" }}>
        <Card.Body>
          <Card.Img variant="" width={"15px"} src={picture} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skill;
