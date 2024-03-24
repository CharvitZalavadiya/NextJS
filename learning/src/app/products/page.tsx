import Link from "next/link";

export default function ProductList() {
  const pId = 123
  return (
    <>
      <h2>Product List</h2>
      <ol>
        <li><Link href="products/1">Product 1</Link></li>
        <li><Link href="products/2">Product 2</Link></li>
        <li><Link href="products/3" replace>Product 3</Link></li>
        <li><Link href={`products/${pId}`}>Product {pId}</Link></li>
      </ol>
    </>
  );
}
