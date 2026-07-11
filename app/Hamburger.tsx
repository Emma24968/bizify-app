"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="z-50 relative">
        {" "}
        <Hamburger size={24} toggled={open} toggle={setOpen} />
      </div>
      {open && (
        <nav>
          <ul className="fixed z-40 inset-0 bg-[#F4F5F6] p-8 grid gap-6">
            <li className="flex items-center gap-1 cursor-pointer">
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About us</Link>
            </li>

            <li className="relative group flex items-center gap-1 cursor-pointer">
              <div className="flex items-center gap-1">
                <Link href="/services">Services</Link>
                <ChevronDown size={16} />
              </div>
              <div className="absolute left-0 top-full z-50 hidden w-64 rounded-lg bg-white shadow-lg group-hover:block">
                <Link
                  href="/services/finance-planning"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Finance Planning
                </Link>

                <Link
                  href="/services/tax-file-audit"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Tax File Audit
                </Link>

                <Link
                  href="/services/risk-management"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Risk Management
                </Link>

                <Link
                  href="/services/investment"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Investment
                </Link>

                <Link
                  href="/services/business-strategy"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Business Strategy
                </Link>

                <Link
                  href="/services/marketing-strategy"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Marketing Strategy
                </Link>
              </div>
            </li>

            <li className="flex items-center gap-1 cursor-pointer">
              <Link href="/blog">Blog</Link>
              <ChevronDown size={16} />
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
