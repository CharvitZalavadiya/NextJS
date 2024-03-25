import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request : NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    const theme = request.cookies.get("theme");
    cookies().set("nextCookie", "typeofNext")

    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    
    console.log(theme)
    console.log(cookies().get("nextCookie"));

    // return new Response ("Profile Data API");
    return new Response ("<h2>Set Headers</h2>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}