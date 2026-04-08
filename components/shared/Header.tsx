"use client";

import Image from "next/image";
import { Container, SearchInput } from "./index";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

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
              src="/logo1.png"
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
            <Button className="group relative cursor-pointer">
              <b> 0$</b>
              <span className="h-full w-[1px] bg-white/30 mx-2" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>0</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />{" "}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
