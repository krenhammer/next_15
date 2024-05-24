import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid h-screen place-items-center text-4xl">
            <div>
                More

            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/stuff">Stuff</Link>
                <Link href="/another">Another</Link>
            </div>
        </div>
    )
}