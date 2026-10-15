import prisma from "@/prisma/prisma-client";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || "";

  if (!query.trim()) {
    return NextResponse.json([]);
  }

  const searchPattern = `%${query}%`;

  const products = await prisma.$queryRaw<Product[]>`
    SELECT id, name, "imageUrl"
    FROM "Product"
    WHERE name ILIKE ${searchPattern}
  `;
  return NextResponse.json(products);
}
