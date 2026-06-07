import { ProductGroupList } from "@/components/shared/ProductGroupList";
import prisma from "@/prisma/prisma-client";
import { Container, Filters, Title, TopBar } from "../components/shared/index";

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
        <Title text="All pizza's!" size="lg" className="" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
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
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
