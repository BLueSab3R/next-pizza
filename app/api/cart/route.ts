import prisma from "@/prisma/prisma-client";
import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export type CartItemDTO = CartItem & {
  product: Product & {
    productItem: ProductItem;
  };

  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ items: [{ text: "none" }] });
    }
    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });
    return NextResponse.json(userCart);
  } catch (error) {
    console.error("[CART_GET] Error during fetching:", error);

    return NextResponse.json(
      { message: "Something wrong with server" },
      { status: 500 }
    );
  }
}
