import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const Skill = ({ skill }) => {
  // const now = skill;

  // const progressInstance =

  // render(progressInstance);
  const { picture, name, now } = skill;
  return (
    <div
      className=" g-3 col-sm-6 col-md-6 col-lg-3"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <Card
        className="shadow-lg"
        text="light"
        bg="dark"
        style={{ width: "15rem" }}
      >
        <Card.Body>
          <Card.Img className=" img-fluid" src={picture} />
          <h5>{name}</h5>
          <ProgressBar now={now} label={`${now}%`} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default Skill;
