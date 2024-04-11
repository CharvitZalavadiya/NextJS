import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    console.log(`serverRoute Rendered`)
  const result = serverSideFunction();

  return (
    <>
      <h2>ServerRoute</h2>
      <p>{result}</p>
    </>
  );
}
