import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid h-screen place-items-center text-4xl">
            More

            <Link href="/">Home</Link>
            <Link href="/stuff">Stuff</Link>
        </div>
    )
}