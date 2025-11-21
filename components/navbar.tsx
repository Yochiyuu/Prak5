"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <Navbar
      expand="lg" // --- PERUBAHAN DI SINI --- // 1. Hapus 'mx-5'
      className="navbar-glassy fixed-top bg-transparent rounded-pill mt-3"
      data-bs-theme="dark" // 2. Tambahkan style manual untuk lebar dan posisi tengah
      style={{
        width: "70%", // <-- GANTI INI (misal '80%') JIKA MAU LEBIH PENDEK
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#home" className="fs-4 fw-bold">
          Drew
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 fw-medium gap-3" navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about" className="text-nowrap">
              About Me
            </Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
