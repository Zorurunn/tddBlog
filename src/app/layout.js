"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "../components/Container";
import { Navbar } from "../components/HeaderAndFooter/Navbar";
import { Footer } from "../components/HeaderAndFooter/Footer";
import { SearchDataProvider } from "../components/providers/SearchDataProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchDataProvider>
          <Container>
            <Navbar />
          </Container>
          {children}
          <Container bg={"bg-gray-50"}>
            <Footer />
          </Container>
        </SearchDataProvider>
      </body>
    </html>
  );
}
