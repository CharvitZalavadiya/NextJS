import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return (
    <>
      <p>Blogs !</p>
      <Link href="/">Home</Link>
    </>
  );
}
