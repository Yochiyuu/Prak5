"use client";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";
import Navbar from "../components/navbar";
import ServiceSection from "../components/servicesection";
import WorkSection from "../components/worksection";

export default function Home() {
  return (
    <div>
      <div className="navbar-floating-container">
        <Navbar />
      </div>

      <main>
        <HeroSection />

        <section
          id="about"
          className="min-vh-100 d-flex align-items-center position-relative overflow-hidden py-5"
        >
          <Container>
            <Row className="align-items-center gx-5">
              <Col lg={5} className="mb-5 mb-lg-0 text-center text-lg-start">
                <div
                  className="d-inline-block position-relative"
                  style={{
                    border: "3px solid var(--info-color)",
                    borderRadius: "1.5rem",
                    padding: "15px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src="/images/Drew.png"
                    alt="Andrew Reinhart"
                    width={500}
                    height={650}
                    className="img-fluid shadow-sm"
                    style={{
                      borderRadius: "1rem",
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
              </Col>

              <Col lg={7}>
                <div className="ps-lg-4">
                  <h6
                    className="text-uppercase fw-bold mb-2"
                    style={{ color: "var(--info-color)" }}
                  >
                    Who I Am
                  </h6>
                  <h2 className="display-5 fw-bolder mb-4">
                    Bridging{" "}
                    <span style={{ color: "var(--primary-color)" }}>Web2</span>{" "}
                    Efficiency with{" "}
                    <span style={{ color: "var(--primary-color)" }}>Web3</span>{" "}
                    Innovation.
                  </h2>

                  <p className="lead text-secondary mb-4">
                    Hello! I'm Andrew. I started my journey crafting
                    pixel-perfect UIs with
                    <strong className="text-dark"> Next.js & React</strong>,
                    ensuring every interaction feels smooth.
                  </p>
                  <p className="text-muted mb-5">
                    Now, I'm expanding into the decentralized world. I build
                    smart contracts on Lisk & Ethereum, aiming to create dApps
                    that are not only secure but also accessible to everyone. My
                    goal is to blend technical complexity with user-centric
                    design.
                  </p>

                  <Row className="mb-5 g-3">
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 rounded border bg-light">
                        <h3
                          className="mb-0 me-3 fw-bold"
                          style={{ color: "var(--primary-color)" }}
                        >
                          2+
                        </h3>
                        <span className="small text-uppercase fw-bold text-muted lh-1">
                          Years of
                          <br />
                          Dev Experience
                        </span>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className="d-flex align-items-center p-3 rounded border bg-light">
                        <h3
                          className="mb-0 me-3 fw-bold"
                          style={{ color: "var(--info-color)" }}
                        >
                          10+
                        </h3>
                        <span className="small text-uppercase fw-bold text-muted lh-1">
                          Projects
                          <br />
                          Completed
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Button
                    variant="primary"
                    size="lg"
                    className="fw-bold px-4 rounded-pill shadow-sm"
                    href="#contact"
                  >
                    Let's Collaborate
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="bg-dark">
          <WorkSection />
        </div>

        <div>
          <ServiceSection />
        </div>

        <div>
          <ContactSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}
