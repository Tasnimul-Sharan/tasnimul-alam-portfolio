import React from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

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
          swal("Email Sent", "You clicked the button!", "success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="my-5">
      <h1>Contract With Me</h1>
      <Form
        onSubmit={sendEmail}
        className="container shadow-lg p-5 w-50 text-bold form-group text-start "
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="text" name="user_name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" name="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Message"
          />
        </Form.Group>
        <Button variant="btn btn-success w-50" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contract;
