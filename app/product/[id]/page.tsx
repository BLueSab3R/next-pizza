import { Container, ProductImage, Title } from "@/components/shared";
import prisma from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  console.log(product);
  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product?.imageUrl} size={40} />
        <div className="w-122.5 bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">{product?.description || "test"}</p>
        </div>
      </div>
    </Container>
  );
}
