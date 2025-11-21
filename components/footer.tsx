"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pt-5 pb-4"
      style={{
        backgroundColor: "#050505", // Match dengan Contact Section
        borderTop: "1px solid #1f1f1f", // Garis pemisah halus
      }}
      data-bs-theme="dark"
    >
      <Container>
        <Row className="gy-5 justify-content-between">
          {/* KOLOM 1: Brand & Short Bio */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h3 className="fw-bold text-white mb-3">
                Drew
              </h3>
              <p className="text-secondary pe-lg-5">
                Membangun pengalaman digital yang imersif melalui perpaduan
                teknologi Web2 yang efisien dan inovasi Web3 masa depan.
              </p>
            </div>

            {/* Social Media Icons - Styled */}
            <div className="d-flex gap-3">
              {[
                { icon: "bi-linkedin", href: "#" },
                { icon: "bi-github", href: "#" },
                { icon: "bi-twitter-x", href: "#" }, // Logo X modern
                { icon: "bi-instagram", href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle border border-secondary border-opacity-25 social-icon-hover"
                  style={{
                    width: "40px",
                    height: "40px",
                    transition: "all 0.3s ease",
                    backgroundColor: "#121212",
                  }}
                >
                  <i className={`bi ${social.icon} fs-5`}></i>
                </a>
              ))}
            </div>
          </Col>

          {/* KOLOM 2: Navigation Links */}
          <Col lg={2} md={3} sm={6}>
            <h5 className="text-white fw-bold mb-4">Explore</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#about"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  About Me
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#services"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Services
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#work"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </Col>

          {/* KOLOM 3: Services / Legal */}
          <Col lg={2} md={3} sm={6}>
            <h5 className="text-white fw-bold mb-4">Legal</h5>
            <ul className="list-unstyled text-secondary">
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="text-decoration-none text-secondary hover-text-white transition-all"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </Col>

          {/* KOLOM 4: Newsletter / CTA */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">Stay Updated</h5>
            <p className="text-secondary small mb-3">
              Dapatkan info terbaru seputar proyek dan artikel teknologi
              terbaru.
            </p>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="bg-dark text-white border-secondary border-opacity-25 focus-ring-none"
                  style={{ borderRadius: "50px 0 0 50px", borderRight: "none" }}
                />
                <Button
                  variant="info"
                  className="text-white fw-bold px-4"
                  style={{ borderRadius: "0 50px 50px 0" }}
                >
                  <i className="bi bi-send-fill"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 pt-4 border-top border-secondary border-opacity-10">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-secondary small">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white fw-bold">Andrew Reinhart</span>. All
              rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0 text-secondary small">
              Designed by <span className="text-info">Andrew Reinhart</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
