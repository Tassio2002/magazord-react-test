import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://api.github.com/users/Tassio2002/starred", {
        headers: {
            Authorization: `Barer ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
        }
    })
    const data = await res.json();
    return NextResponse.json(data);
}