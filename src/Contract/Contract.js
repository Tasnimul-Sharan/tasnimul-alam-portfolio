import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import contract from "../../src/images/contract.jpg";

const Contract = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_38i0g0r",
        "template_qurk0ng",
        e.target,
        "Bt4fEQO7x7yDOUxOd"
      )
      .then(
        (result) => {
          swal("Thank you", "Email sent", "success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <h1 className="text-primary">Contract Me</h1>
      <h3 className="text-info">Stay Connected With Me</h3>
      <div class="container my-5">
        <div class="row gy-5">
          <div
            class="col-lg-7"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img className="w-100" src={contract} alt="" />
          </div>

          <div class="col-lg-5">
            <Card
              className="shadow-lg"
              data-aos="flip-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              style={{ width: "26rem" }}
            >
              <Form
                onSubmit={sendEmail}
                className="container  p-5 text-bold form-group text-start "
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Example textarea</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Message"
                  />
                </Form.Group>
                <Button variant="btn btn-success" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contract;
