"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PageHeaderProps = {
  title: string;
  currentPage: string;
};

export default function PageHeader({
  title,
  currentPage,
}: PageHeaderProps) {
  return (
    <section className="bg-[#153C3C] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>

        <div className="mt-4 flex items-center gap-2 text-sm sm:text-base">
          <Link href="/" className="text-[#fffa] hover:text-white transition">
            Home
          </Link>

          <ChevronRight className="w-4 h-4 text-white" />

          <span className="text-white">{currentPage}</span>
        </div>
      </div>
    </section>
  );
}