// src/components/Header.tsx
"use client"; // ← This marks the entire file as a Client Component

import Link from "next/link";
import { useState } from "react";
import icon from "../media/ReparaMDW.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={icon.src}
            alt="Logo Reparación"
            className="h-15 w-15 object-contain"
          />
          <span className="font-bold text-xl">ReparaMD</span>
        </div>

        {/* Desktop nav */}
        <nav className="space-x-6 hidden sm:flex">
          <a href="#servicios" className="hover:underline">
            Servicios
          </a>
          <a href="#precios" className="hover:underline">
            Precios
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </nav>

        {/* Phone button (interactive) */}
        <a
          href="tel:+12406022365"
          className="bg-white text-blue-800 px-4 py-2 rounded-2xl font-semibold hover:bg-blue-100 inline-block"
        >
          (240) 602-2365
        </a>

        {/* Hamburger toggle for mobile */}
        <button
          className="sm:hidden ml-4 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              // “X” icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile menu drawer (simple example) */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-blue-800 text-white sm:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <a href="#servicios" className="block hover:underline">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#precios" className="block hover:underline">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="block hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
