import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid h-screen place-items-center text-4xl">
            <div>
                Another

            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/stuff">Stuff</Link>
                <Link href="/more">More</Link>
            </div>
        </div>
    )
}