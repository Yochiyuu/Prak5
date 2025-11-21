"use client";
import "bootstrap-icons/font/bootstrap-icons.css"; // Pastikan bootstrap-icons diinstal
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export default function Footer() {
  return (
    // Mengganti bg-light menjadi bg-dark dan data-bs-theme="dark"
    <footer
      id="footer"
      className="pt-md-5 pd-md-2 py-5 bg-dark"
      data-bs-theme="dark"
    >
      <Container>
        <Row>
          {/* Our Products */}
          <Col md={3} className="mb-4">
            {/* Judul di-style di globals.css */}
            <h3>Our Products</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Account</a>
              </li>
              <li className="mb-2">
                <a href="#">Bundle</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#">Circular</a>
              </li>
            </ul>
          </Col>
          {/* Quick Link */}
          <Col md={3} className="mb-4">
            <h3>Quick Link</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Service</a>
              </li>
              <li className="mb-2">
                <a href="#">Work</a>
              </li>
              <li className="mb-2">
                <a href="#">Products</a>
              </li>
            </ul>
          </Col>
          {/* Terms */}
          <Col md={3} className="mb-4">
            <h3>Terms</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#">Refund Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">License</a>
              </li>
            </ul>
          </Col>
          {/* Search + Social */}
          <Col md={3} className="mb-4">
            <h3>Search Here</h3>
            <Form className="mb-3">
              <InputGroup>
                <Form.Control type="text" placeholder="Search Here" />
                {/* Memperbaiki variant "Info" menjadi "info" */}
                <Button variant="info" className="text-white fw-bold">
                  Search
                </Button>
              </InputGroup>
            </Form>
            <h3>Follow Us</h3>
            <ul className="list-unstyled d-flex gap-3">
              {/* Memperbesar ikon sosial media */}
              <li>
                <a href="#">
                  <i className="bi bi-facebook fs-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter fs-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram fs-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-youtube fs-3"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-pinterest fs-3"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        {/* Copyright */}
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <hr className="text-white-50" />
            <p className="mb-0 text-white-50">
              All rights reserved by @ Mika Valentino
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
