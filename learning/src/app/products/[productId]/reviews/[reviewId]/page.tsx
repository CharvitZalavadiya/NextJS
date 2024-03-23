export default function ReviewDetails({
    params,
  }: {
    params: {
      productId: string;
      reviewId: string;
    };
  }) {
    return <h2>Review {params.reviewId} of product {params.productId}</h2>;
  }
  