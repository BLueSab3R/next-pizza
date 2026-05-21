import prisma from "@/prisma/prisma-client";
import { Container, Title, TopBar, Filters } from "../components/shared/index";
import { ProductGroupList } from "@/components/shared/ProductGroupList";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          variations: true,
        },
      },
    },
  });
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza's!" size="lg" className="extra-bold" />
      </Container>
      <TopBar />
      <Container className="mt-9 pb-12">
        <div className="flex gap-20">
          <div className="w-62.5">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductGroupList
                      title={category.name}
                      categoryId={category.id}
                      key={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
