import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import picture from "../../src/images/Sharan.jpg.jpg";

const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={picture}
              width="50"
              height="50"
              className="img-fluid rounded-circle"
            />{" "}
            Tasnimul
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
