import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers"; // Error akan hilang setelah file providers.tsx dibuat

// --- IMPORT CSS & BOOTSTRAP ---
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// --- KONFIGURASI FONT POPPINS ---
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drew Portofolio",
  description: "Portfolio of Andrew Reinhart, Web Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
