"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Trang chu" },
    { href: "/about", label: "Gioi thieu" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Du an" },
    { href: "/guestbook", label: "Luu but" },
    { href: "/skills", label: "Ky nang" },
    { href: "/contact", label: "Lien he" },
  ];

  return (
    <nav className="border-b border-[#CDE3EB] bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#143A52] dark:text-white">
            Hoang Long
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#CDE3EB] text-[#143A52] md:hidden dark:border-gray-700 dark:text-white"
            >
              <span className="text-lg">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        <div className="mt-4 hidden gap-6 md:flex md:items-center md:justify-end md:mt-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#6E828A] transition-colors hover:text-[#143A52] dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {open ? (
          <div className="mt-4 space-y-2 border-t border-[#CDE3EB] pt-3 md:hidden dark:border-gray-700">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-[#6E828A] transition-colors hover:bg-[#E3EFF3] hover:text-[#143A52] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
