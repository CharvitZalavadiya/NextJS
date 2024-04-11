"use client"

import { useTheme } from "@/components/theme-provider";
// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute() {
  console.log(`clientRoute Rendered`)
  // const result = serverSideFunction();
  const Theme = useTheme()
  const settings = {
    dots: true,
  }

  return (
    <>
      <h2 style={{color: Theme.colors.secondary}}>ClientRoute</h2>
      {/* <p>{result}</p> */}
    </>
  );
}
