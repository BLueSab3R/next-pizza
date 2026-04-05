export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return <div>Product - {id}</div>;
}
