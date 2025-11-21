"use client";
import { Card, Col, Container, Row } from "react-bootstrap";

function ServiceSection() {
  const services = [
    {
      id: 1,
      icon: "bi-code-slash",
      title: "Web Development",
      desc: "Membangun website responsif dan cepat menggunakan teknologi modern seperti React, Next.js, dan Bootstrap.",
    },
    {
      id: 2,
      icon: "bi-palette",
      title: "UI/UX Design",
      desc: "Merancang antarmuka yang estetis dan ramah pengguna (User Friendly) untuk meningkatkan pengalaman digital.",
    },
    {
      id: 3,
      icon: "bi-layers",
      title: "Blockchain / Web3",
      desc: "Pengembangan Smart Contract dan integrasi dApps menggunakan Lisk dan Ethereum.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h6 className="text-info text-uppercase fw-bold letter-spacing-2 mb-2">
              What I Offer
            </h6>
            <h2 className="display-5 fw-bold text-white mb-3">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-secondary lead">
              Solusi digital berkualitas tinggi yang disesuaikan dengan
              kebutuhan bisnis dan proyek Anda.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {services.map((service) => (
            <Col md={6} lg={4} key={service.id}>
              <Card
                className="h-100 border-0 shadow-sm service-card"
                style={{
                  backgroundColor: "#121212",
                  borderRadius: "15px",
                  border: "1px solid #222",
                }}
              >
                <Card.Body className="p-4 text-center text-md-start">
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-4 rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(13, 202, 240, 0.1)",
                      color: "#0dcaf0",
                    }}
                  >
                    <i className={`bi ${service.icon} fs-3`}></i>
                  </div>

                  <h4 className="text-white fw-bold mb-3">{service.title}</h4>
                  <p className="text-secondary mb-0">{service.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServiceSection;
