export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h2>Details of product {params.productId}</h2>;
}
