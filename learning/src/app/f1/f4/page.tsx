import Link from "next/link";

export default function F4() {
  return (
    <>
      <p>F4 Page</p>
      <div>
        <Link href="/f1/f3">F3</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}