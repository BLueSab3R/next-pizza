import prisma from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    await prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log("Server error:", error);
    return NextResponse.json(
      { message: `Error during updating cart:${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ error: "Cart token are not found" });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(id),
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: `Error during updating cart:${e}` },
      { status: 500 }
    );
  }
}
