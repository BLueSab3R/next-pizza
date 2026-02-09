"use client";

import Image from "next/image";
import { Container } from "./Container";

interface Props {
  className?: string;
}
export default function Header() {
  return (
    <div className="border border-b">
      <Container className="flex items-center justify-between py-8">
        <div className="d-flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div className="">
            <h1 className="text-2xl uppercase font-black">Next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              There is nowhere tastier
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
