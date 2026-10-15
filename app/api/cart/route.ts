import prisma from "@/prisma/prisma-client";
import { CreateCartItemValues } from "@/services/dto/cart.dto";
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";
import crypto from "crypto";
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
      { message: "Something gone wrong with your cart" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;
    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });

      const updatedUserCart = await updateCartTotalAmount(token);

      return NextResponse.json(updatedUserCart);
    }
  } catch (err) {
    console.error("[CART_POST] Error during fetching:", err);
    return NextResponse.json({
      message: "Failed during creating a cart",
      status: 500,
    });
  }
}
