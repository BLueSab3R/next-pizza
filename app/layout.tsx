import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "../components/shared/index";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic", "latin", "latin-ext"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next pizza | Main",
  description: "Delicious pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
