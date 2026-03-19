import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";
  const products = await prisma.product.findMany({
    //it's like a ===, strict search
    // where:{
    //   name:query
    // }

    // here method like include
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
  return NextResponse.json({});
}
