"use client";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function ContactSection() {
  return (
    <Container className="my-5 py-5">
      {/* Menggunakan justify-content-center dan Col size untuk membatasi lebar form */}
      <Row className="my-3 py-5 justify-content-center">
        <Col md={10} lg={8} xl={6}>
          {/* Membuat Card transparan (bg-white bg-opacity-75) agar gambar map terlihat.
                      Menambahkan shadow-lg dan border-0 untuk efek "pop-out".
                    */}
          <Card
            className="text-center p-4 p-md-5 shadow-lg bg-white bg-opacity-75 border-0"
            data-bs-theme="light"
          >
            <Card.Body>
              <h2 className="display-5 fw-bold">Contact Us</h2>
              <p className="lead text-secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Form className="mt-3 p-3 text-start">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  {/* Mengurangi rows agar tidak terlalu tinggi */}
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>
                {/* Menggunakan d-grid agar tombol full-width */}
                <div className="d-grid">
                  <Button
                    variant="info"
                    type="submit"
                    className="text-white fw-bold"
                    size="lg"
                  >
                    Submit Message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;
