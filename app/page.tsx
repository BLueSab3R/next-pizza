import { Container, Title, TopBar, Filters } from "../components/shared/index";
import { ProductGroupList } from "@/components/shared/ProductGroupList";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza's!" size="lg" className="extra-bold" />
      </Container>
      <TopBar />
      <Container className="mt-9 pb-12">
        <div className="flex gap-12">
          <div className="w-62.5">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Pizzas"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://www.dominos.co.in//files/items/Pizza_Margherita.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
