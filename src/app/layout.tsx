import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Container from "@/components/container";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "Misato Tanno Blog",
  description: "This is my blog page about web dev, design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased pros ${roboto.className}`}
      >
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
