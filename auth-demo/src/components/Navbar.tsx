"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-1 border-l-1 border-b-gray-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            NextJS Authentication
          </a>
        </div>
        <div className="w-56 flex ml-16 mr-16 justify-between">
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
