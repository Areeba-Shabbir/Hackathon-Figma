"use client";

import Link from "next/link";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <h1 className="font-bold text-lg">
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/about-us">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="hidden lg:flex gap-4 text-gray-700">
          <Link href="/accounts">
            <PersonIcon className="cursor-pointer" />
          </Link>
          <SearchIcon className="cursor-pointer" />
          <FavoriteIcon className="cursor-pointer" />
          <Link href="/cart">
            <ShoppingCartIcon className="cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden bg-gray-50 shadow-md p-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
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

        <div className="flex justify-center gap-4 mt-4 text-gray-700">
          <Link href="/accounts">
            <PersonIcon className="cursor-pointer" />
          </Link>
          <SearchIcon className="cursor-pointer" />
          <FavoriteIcon className="cursor-pointer" />
          <Link href="/cart">
            <ShoppingCartIcon className="cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
