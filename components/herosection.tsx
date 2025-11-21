"use client";
import { Button } from "react-bootstrap";

const row1Tech = [
  "Next.js",
  "React",
  "Vercel",
  "TypeScript",
  "Bootstrap",
  "JavaScript",
  "HTML5",
  "CSS3",
];
const row2Tech = [
  "Solidity",
  "Ethereum",
  "Lisk",
  "Sui",
  "Thirdweb",
  "Hardhat",
  "Metamask",
  "Move",
];
const row3Tech = [
  "Node.js",
  "Python",
  "Docker",
  "PostgreSQL",
  "Prisma",
  "Linux",
  "Git",
  "Firebase",
];

const BackgroundMarqueeRow = ({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) => (
  <div className="hero-marquee-wrapper">
    <div
      className={`hero-marquee-track ${
        direction === "left" ? "direction-left" : "direction-right"
      }`}
    >
      {[...items, ...items, ...items, ...items].map((item, index) => (
        <span key={index} className="hero-marquee-item">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <div
      id="home"
      className="position-relative d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
    >
      <div className="hero-background-marquee">
        <BackgroundMarqueeRow items={row1Tech} direction="left" />
        <BackgroundMarqueeRow items={row2Tech} direction="right" />
        <BackgroundMarqueeRow items={row3Tech} direction="left" />
      </div>

      <div className="hero-overlay-dark"></div>

      <div
        className="text-center text-white"
        style={{ zIndex: 10, position: "relative" }}
      >
        <h1 className="display-3 fw-bolder">Hi, I'm Drew. Glad you're here!</h1>
        <p className="lead d-none d-md-block mb-4">
          Scroll down to see what I’ve built — and how I think through design
          and code.
        </p>

        <Button
          variant="primary"
          size="lg"
          className="fw-bold px-5 py-3 rounded-pill"
        >
          Pelajari Lebih Lanjut
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
