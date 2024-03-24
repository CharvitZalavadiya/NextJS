"use client";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h2>Order Product</h2>
      <button
        className="p-3 m-5 bg-slate-200 font-medium rounded-md text-green-600 border border-blue-500"
        onClick={handleClick}
      >
        Place Order
      </button>
    </>
  );
}
