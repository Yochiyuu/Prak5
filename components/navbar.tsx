"use client";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setExpanded(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      className="navbar-glassy fixed-top bg-transparent rounded-pill mt-3"
      data-bs-theme="dark"
      style={{
        width: "90%",
        maxWidth: "1200px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="fs-4 fw-bold"
        >
          Drew
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 fw-medium gap-1 gap-lg-3">
            <Nav.Link href="#home" onClick={(e) => handleScroll(e, "home")}>
              Home
            </Nav.Link>

            <Nav.Link
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="text-nowrap"
            >
              About Me
            </Nav.Link>

            <Nav.Link
              href="#portfolio"
              onClick={(e) => handleScroll(e, "portfolio")}
            >
              Project
            </Nav.Link>

            <Nav.Link href="#skills" onClick={(e) => handleScroll(e, "skills")}>
              Skills
            </Nav.Link>

            <Nav.Link
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
