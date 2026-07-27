"use client";

import { Button } from "@/shared/ui";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CartButton, Container, SearchInput } from "./index";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <div className="border border-b">
      <Container className="flex items-center justify-between py-6">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              loading="eager"
              alt="logo"
              width={96}
              height={96}
            />
            <div className="">
              <h1 className="text-2xl uppercase font-black">Next pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                There is nowhere tastier
              </p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={20} />
            Login
          </Button>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </div>
  );
};
