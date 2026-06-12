import { Metadata } from "next";
import { Header } from "../../components/shared/index";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next pizza | Main",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen">
        <Header />
        {children}
      </main>
    </html>
  );
}
