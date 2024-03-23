import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }

  return (
    <h2>
      Review {params.reviewId} of product {params.productId}
    </h2>
  );
}
