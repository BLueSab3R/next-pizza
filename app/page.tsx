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
        <div className="flex gap-20">
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
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 6,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 7,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                ]}
              />

              <ProductGroupList
                title="Breakfast"
                categoryId={2}
                items={[
                  {
                    id: 8,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 9,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 10,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 11,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 12,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 13,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
                    items: [
                      {
                        price: 5.99,
                      },
                    ],
                  },
                  {
                    id: 14,
                    name: "Pizza Margherita",
                    imageUrl:
                      "https://pizzahut-images.futureordering.com/images/product/68/82CF8DA4494063613FC66326F067A35CD/760x706.jpg",
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
