"use client";
import Image from "next/image";
import { Card, Col, Container, Row } from "react-bootstrap";

// Icon panah
const ArrowRight = () => <span>&rarr;</span>;

const ServiceCard = ({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => (
  <Col lg={4} md={6} className="mb-4">
    {/* Card dark mode wrapper */}
    <Card className="service-card-dark h-100 border-0 shadow-sm overflow-hidden text-white">
      <Card.Body className="p-4 p-xl-5 d-flex flex-column align-items-center text-center">
        {/* Icon Wrapper dengan Dark Gradient */}
        <div className="icon-wrapper mb-4">
          <div className="icon-bg-dark"></div>
          {/* PENTING: Class 'icon-image' ditambahkan untuk filter CSS */}
          <Image
            src={iconSrc}
            alt={title}
            width={50}
            height={50}
            className="position-relative z-1 icon-image"
          />
        </div>

        <h4 className="fw-bold mb-3 text-white">{title}</h4>
        {/* Menggunakan text-white-50 (abu-abu terang) untuk deskripsi */}
        <p
          className="text-white-50 mb-4 flex-grow-1"
          style={{ lineHeight: "1.6" }}
        >
          {description}
        </p>

        <a
          href="#"
          className="text-decoration-none fw-bold text-info service-link"
        >
          Learn More <ArrowRight />
        </a>
      </Card.Body>
    </Card>
  </Col>
);

function ServiceSectionDark() {
  return (
    // Menggunakan bg-black atau warna custom gelap untuk section utama
    <section className="bg-black position-relative overflow-hidden text-white py-5">
      <style jsx global>{`
        /* Styling Card Dark Mode */
        .service-card-dark {
          transition: all 0.3s ease-in-out;
          /* Background kartu sedikit lebih terang dari background section utama */
          background: #1a1a1a;
          border-radius: 16px;
          border: 1px solid #333 !important; /* Border tipis agar tidak mati */
        }
        .service-card-dark:hover {
          transform: translateY(-10px);
          background: #222; /* Sedikit lebih terang saat hover */
          /* Shadow yang lebih pekat untuk dark mode */
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.8) !important;
          border-color: #0dcaf0 !important; /* Highlight border warna biru muda saat hover */
        }

        /* Wrapper Ikon */
        .icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* --- PENTING: Auto-White Icon --- */
        /* Ini akan membuat gambar ikon hitam menjadi putih terang */
        .icon-image {
          filter: invert(1) brightness(2);
          opacity: 0.9;
        }

        /* Background Gradient di belakang icon (Versi Gelap) */
        .icon-bg-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* Gradien biru tua ke ungu gelap, dengan opacity rendah */
          background: linear-gradient(135deg, #0c4a6e 0%, #312e81 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          transition: all 0.3s ease;
          opacity: 0.4; /* Dibuat agak transparan agar elegan */
        }

        /* Saat hover, gradien menjadi lebih terang dan bulat */
        .service-card-dark:hover .icon-bg-dark {
          border-radius: 50%;
          /* Gradien menjadi biru cyan terang saat hover */
          background: linear-gradient(135deg, #0ea5e9 0%, #0dcaf0 100%);
          transform: rotate(0deg) scale(1.1);
          opacity: 0.2;
        }

        .service-link {
          transition: gap 0.2s;
          display: inline-flex;
          gap: 5px;
          align-items: center;
          /* Menggunakan warna text-info (cyan) agar kontras di hitam */
          color: #0dcaf0 !important;
        }
        .service-card-dark:hover .service-link {
          gap: 10px;
        }
      `}</style>

      <Container id="service" className="my-5">
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            {/* Menggunakan text-info (biru muda cyan) sebagai warna aksen */}
            <span className="text-info fw-bold text-uppercase tracking-wider small">
              What We Do
            </span>
            <h2 className="display-5 fw-bold mb-3 mt-2 text-white">
              Solusi Digital untuk{" "}
              <span className="text-info">Pertumbuhan Bisnis</span>
            </h2>
            {/* Lead text menggunakan warna abu-abu terang */}
            <p className="lead text-white-50">
              Kami membantu Anda mentransformasi ide menjadi produk digital yang
              berkualitas tinggi, skalabel, dan berorientasi pada hasil di era
              gelap ini.
            </p>
          </Col>
        </Row>

        <Row>
          <ServiceCard
            iconSrc="/images/about-icon1.png" // Pastikan path ini benar
            title="Web Development"
            description="Membangun website modern, responsif, dan performa tinggi menggunakan Next.js dan teknologi terbaru."
          />
          <ServiceCard
            iconSrc="/images/about-icon2.png"
            title="UI/UX Design"
            description="Menciptakan antarmuka pengguna yang menarik dengan fokus pada pengalaman pengguna yang intuitif."
          />
          <ServiceCard
            iconSrc="/images/about-icon3.png"
            title="Digital Strategy"
            description="Analisis mendalam dan penyusunan strategi digital yang efektif untuk mencapai KPI bisnis Anda."
          />
        </Row>
      </Container>
    </section>
  );
}

export default ServiceSectionDark;
