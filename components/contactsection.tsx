"use client";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: "#050505" }} // Background Hitam Pekat
    >
      <Container className="my-5 py-5">
        {/* Membuat kolom pembungkus lebih lebar (lg={10} xl={11}) agar kartu memanjang */}
        <Row className="justify-content-center">
          <Col lg={10} xl={11}>
            <Card
              className="border-0 text-white overflow-hidden"
              style={{
                backgroundColor: "#121212", // Warna Solid (Ringan)
                borderRadius: "20px",
                border: "1px solid #333",
              }}
              data-bs-theme="dark"
            >
              <Card.Body className="p-0">
                {/* Menggunakan Row di dalam Card untuk tata letak Kiri-Kanan */}
                <Row className="g-0">
                  {/* KOLOM KIRI: Informasi Teks (Hanya muncul di desktop agar tidak tinggi) */}
                  <Col
                    lg={5}
                    className="p-5 d-flex flex-column justify-content-center border-end border-secondary border-opacity-25"
                  >
                    <div className="mb-4">
                      <h6 className="text-info text-uppercase fw-bold letter-spacing-2 mb-3">
                        Get in Touch
                      </h6>
                      <h2 className="display-5 fw-bold mb-4">
                        Let's Build Something{" "}
                        <span className="text-info">Great.</span>
                      </h2>
                      <p className="text-secondary lead mb-4">
                        Punya ide proyek ambisius atau sekadar ingin berdiskusi
                        tentang teknologi Web3? Saya siap mendengar cerita Anda.
                      </p>

                      {/* Info Tambahan Kecil */}
                      <div className="mt-auto pt-3">
                        <div className="d-flex align-items-center mb-3">
                          <i className="bi bi-envelope-at fs-4 text-info me-3"></i>
                          <span className="text-light">
                            hello@andrewreinhart.com
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt fs-4 text-info me-3"></i>
                          <span className="text-light">Jakarta, Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* KOLOM KANAN: Formulir */}
                  <Col lg={7} className="p-5 bg-dark bg-opacity-10">
                    <Form>
                      <Row>
                        <Col md={6} className="mb-4">
                          <Form.Group controlId="formName">
                            <Form.Label className="small text-uppercase fw-bold text-secondary">
                              Your Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="John Doe"
                              className="form-control-solid py-2"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-4">
                          <Form.Group controlId="formEmail">
                            <Form.Label className="small text-uppercase fw-bold text-secondary">
                              Email Address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="john@example.com"
                              className="form-control-solid py-2"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4" controlId="formSubject">
                        <Form.Label className="small text-uppercase fw-bold text-secondary">
                          Subject
                        </Form.Label>
                        <Form.Select className="form-control-solid text-secondary py-2">
                          <option>Pilih topik pembicaraan...</option>
                          <option value="project">Diskusi Proyek</option>
                          <option value="hiring">Penawaran Kerja</option>
                          <option value="collab">Kolaborasi</option>
                          <option value="other">Lainnya</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formMessage">
                        <Form.Label className="small text-uppercase fw-bold text-secondary">
                          Message
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4} // Mengurangi tinggi rows sedikit agar pas
                          placeholder="Ceritakan detail proyek atau pesan Anda..."
                          className="form-control-solid"
                          required
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          variant="primary"
                          size="lg"
                          type="submit"
                          className="fw-bold py-3 rounded-pill shadow-none"
                        >
                          Send Message
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
