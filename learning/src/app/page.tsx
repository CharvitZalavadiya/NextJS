import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Welcome User to Home ! (●'◡'●)</p>
      <Link href="/blog">Blog</Link>
    </>
  );
}
