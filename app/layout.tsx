import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Container from "./components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CINFO",
  description: "Coordenação de Informática do IFAL - Campus Maceió",
};

const classBody =
  "min-h-screen bg-neutral-100 font-sans antialiased " +
  inter.className;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={classBody}>
        <Header />
        <Container className="py-5">
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
