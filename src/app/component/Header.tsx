"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6">


        {/* Desktop Menu */}
        <ul className="hidden ml-80 px-9 lg:flex gap-6  cursor-pointer">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
