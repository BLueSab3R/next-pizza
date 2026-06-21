import { Header } from "@/shared/components";
import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next pizza | Main",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
