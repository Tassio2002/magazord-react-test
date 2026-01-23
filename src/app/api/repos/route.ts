import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://api.github.com/users/Tassio2002/repos", {
        headers: {
            Authorization: `Barer ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
        }
    })
    const data = await res.json();
    console.log(data)
    return NextResponse.json(data);
}