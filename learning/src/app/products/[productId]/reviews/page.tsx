export default function Reviews({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <>
      <h2>Reviws of product {params.productId}</h2>
      <ol>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
        <li>Review 4</li>
        <li>Review 5</li>
      </ol>
    </>
  );
}
