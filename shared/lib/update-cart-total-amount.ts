import prisma from "@/prisma/prisma-client";
import { NextResponse } from "next/server";
import { calcCartItemTotalPrice } from ".";

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
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
  if (!userCart) {
    return NextResponse.json({
      message: "Error during getting your cart!",
      code: 404,
    });
  }
  const totalAmount = userCart.items.reduce(
    (acc, item) => acc + calcCartItemTotalPrice(item),
    0
  );

  await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },
  });
};
