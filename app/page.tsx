import { Container, Title, TopBar, Filters } from "../components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizza's!" size="lg" className="extra-bold" />
      </Container>
      <TopBar />
      <Container className="mt-9 pb-12">
        <div className="flex gap-12">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">list of items</div>
          </div>
        </div>
      </Container>
    </>
  );
}
