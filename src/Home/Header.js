import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import code from "../../src/images/Code Dots_1.jpg";

const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={code}s
              width="60"
              height="60"
              className="img-fluid rounded-circle"
            />{" "}
            Tasnimul Alam
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
              variant="pills"
              defaultActiveKey="/contract"
            >
              <Nav.Link as={Link} to="/contract">
                Contract
              </Nav.Link>
              <Nav.Link as={Link} to="/Skills">
                Skills
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
