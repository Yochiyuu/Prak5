"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

const projects = [
  {
    title: "Drew-discordbot",
    desc: "Drew is a music bot that delivers clean, ad-free listening...",
    image: "/Prak5/images/drewbot.png",
    stack: ["Python", "Discord API"],
    color: "primary",
  },
  {
    title: "Corclo Social Media",
    desc: "A modern social media platform focused on community interaction...",
    image: "/Prak5/images/corclo.png",
    stack: ["Next.js", "Prisma ORM", "Bootstrap"],
    color: "info",
  },
  {
    title: "Domain-crowdfund",
    desc: "A decentralized application (dApp) for transparent fundraising...",
    image: "/Prak5/images/domain.png",
    stack: ["Next.js", "Thirdweb SDK", "Solidity", "Ethers.js"],
    color: "success",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function WorkSection() {
  return (
    <section
      id="portfolio"
      className="min-vh-100 d-flex align-items-center py-5"
      style={{ backgroundColor: "#000000" }}
    >
      <Container>
        <Row className="mb-5">
          <Col md={12} className="text-center text-white">
            <motion.h2
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Featured <span className="text-info">Projects</span>
            </motion.h2>
            <motion.div
              className="mx-auto"
              style={{ maxWidth: "700px" }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="lead text-secondary">
                A selection of my recent work in Web2 and Web3 development,
                bridging efficient interfaces with decentralized logic.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="card-hover-effect h-100 shadow border-0 bg-dark text-white overflow-hidden">
                  <div
                    style={{
                      height: "220px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-img-transition"
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(33,37,41,1) 100%)",
                        zIndex: 1,
                      }}
                    ></div>
                  </div>

                  <Card.Body
                    className="d-flex flex-column p-4 position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <Card.Title
                      className={`fw-bold text-${project.color} mb-2 fs-4`}
                    >
                      {project.title}
                    </Card.Title>

                    <div className="mb-3">
                      {project.stack.map((tech, i) => (
                        <Badge
                          key={i}
                          bg="secondary"
                          className="me-1 mb-1 fw-normal bg-opacity-25 border border-secondary text-light"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Card.Text className="flex-grow-1 text-secondary small mb-4">
                      {project.desc}
                    </Card.Text>

                    <Button
                      variant={`outline-${project.color}`}
                      className="fw-bold mt-auto rounded-pill w-100"
                    >
                      View Case Study
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WorkSection;
