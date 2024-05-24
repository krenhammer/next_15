import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid h-screen place-items-center text-4xl">
            Stuff

            <Link href="/">Home</Link>
            <Link href="/more.tsx">More</Link>
        </div>
    )
}